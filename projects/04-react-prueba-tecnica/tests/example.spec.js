// @ts-check
import { test, expect } from '@playwright/test';

const URL_LOCALHOST = 'http://localhost:5173/';
const CAT_PREFIX_IMG_URL = 'https://cataas.com';

test('app shows random fact and img', async ({ page }) => {
  await page.goto(URL_LOCALHOST);

  const textFactFirstStrong = page.locator('strong').nth(0);
  const imgCat = page.locator('img').first();

  const textCatFactContent = await textFactFirstStrong.textContent();
  const imgCatSrc = await imgCat.getAttribute('src');

  // console.log('Cat Fact -> ', "'", textCatFactContent, "'");
  // console.log('Img Src -> ', "'", imgCatSrc, "'");
  expect(textCatFactContent?.length).toBeGreaterThan(0);
  expect(imgCatSrc?.startsWith(CAT_PREFIX_IMG_URL)).toBeTruthy();
});