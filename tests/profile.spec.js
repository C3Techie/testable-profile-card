const { test, expect } = require('@playwright/test');
const path = require('path');

const filePath = 'file://' + path.resolve(__dirname, '../index.html');

test.describe('Profile Card HNG Requirements', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto(filePath);
    });

    test('should have all required data-testid attributes', async ({ page }) => {
        const requiredIds = [
            'test-profile-card',
            'test-user-name',
            'test-user-bio',
            'test-user-time',
            'test-user-avatar',
            'test-user-social-links',
            'test-user-hobbies',
            'test-user-dislikes'
        ];

        for (const id of requiredIds) {
            const element = page.locator(`[data-testid="${id}"]`);
            await expect(element).toBeVisible();
        }
    });

    test('should verify the millisecond epoch time updates', async ({ page }) => {
        const timeElement = page.locator('[data-testid="test-user-time"]');
        
        // Get initial time
        const time1 = await timeElement.innerText();
        
        // Wait for some time
        await page.waitForTimeout(500);
        
        // Get updated time
        const time2 = await timeElement.innerText();
        
        expect(Number(time2)).toBeGreaterThan(Number(time1));
        
        // Check if it's a valid millisecond timestamp (recent)
        const now = Date.now();
        expect(Math.abs(now - Number(time2))).toBeLessThan(5000); // within 5 seconds
    });

    test('should have an avatar with correct alt text', async ({ page }) => {
        const avatar = page.locator('[data-testid="test-user-avatar"]');
        await expect(avatar).toHaveAttribute('alt', /Christian Chibuike/i);
    });

    test('should have individual social link testids and correct behavior', async ({ page }) => {
        const socialLinksContainer = page.locator('[data-testid="test-user-social-links"]');
        await expect(socialLinksContainer).toBeVisible();

        const githubLink = page.locator('[data-testid="test-user-social-github"]');
        const linkedinLink = page.locator('[data-testid="test-user-social-linkedin"]');
        const twitterLink = page.locator('[data-testid="test-user-social-twitter"]');

        await expect(githubLink).toHaveAttribute('target', '_blank');
        await expect(githubLink).toHaveAttribute('rel', /noopener/);
        
        await expect(linkedinLink).toBeVisible();
        await expect(twitterLink).toBeVisible();
    });

    test('should have hobbies and dislikes as lists', async ({ page }) => {
        const hobbiesList = page.locator('[data-testid="test-user-hobbies"]');
        const dislikesList = page.locator('[data-testid="test-user-dislikes"]');

        await expect(hobbiesList.locator('li')).toHaveCount(4);
        await expect(dislikesList.locator('li')).toHaveCount(4);
    });

    test('should be responsive (mobile layout check)', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        const card = page.locator('[data-testid="test-profile-card"]');
        
        // On small screens, content should stack or behave reasonably
        await expect(card).toBeVisible();
        const box = await card.boundingBox();
        expect(box.width).toBeLessThanOrEqual(375);
    });

    test('should use semantic HTML tags for core structure', async ({ page }) => {
        // Root container should be <article>
        const root = page.locator('[data-testid="test-profile-card"]');
        await expect(root).toHaveJSProperty('tagName', 'ARTICLE');

        // Name container should have <header> and <h1>
        const nameHeader = page.locator('header');
        await expect(nameHeader).toBeVisible();
        await expect(nameHeader.locator('h1[data-testid="test-user-name"]')).toBeVisible();

        // Avatar should be in <figure>
        const figure = page.locator('figure');
        await expect(figure).toBeVisible();
        await expect(figure.locator('img[data-testid="test-user-avatar"]')).toBeVisible();

        // Social links should be in <nav>
        const nav = page.locator('nav');
        await expect(nav).toBeVisible();
        await expect(nav.locator('[data-testid="test-user-social-links"]')).toBeVisible();

        // Lists should be in <section>
        const sections = page.locator('section');
        await expect(sections).toHaveCount(2);
        await expect(sections.first().locator('[data-testid="test-user-hobbies"]')).toBeVisible();
        await expect(sections.last().locator('[data-testid="test-user-dislikes"]')).toBeVisible();
    });
});
