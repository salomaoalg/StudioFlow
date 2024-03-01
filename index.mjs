import scrape from 'website-scraper';
import PuppeteerPlugin from 'website-scraper-puppeteer';

await scrape({
urls: ["https://nv99.com.br/flow"],
directory: 'Flow/StudioFlow',
plugins: [
new PuppeteerPlugin({
launchOptions: { headless: false }, /* optional */
scrollToBottom: { timeout: 10000, viewportN: 10 }, /* optional */
blockNavigation: true, /* optional */
})
]
});