import {test,expect} from'@playwright/test';
import { count } from 'console';

test.describe('scroll to element', ()=>{

    test.beforeEach(async ({page})=> {
        await page.goto("https://app.thetestingacademy.com/playwright/widgets/scroll");

    });

    test ("scroll to element", async ({page})=> {
        //1)ScrollIntoIf Needed = Playwright does scroll for you
        await page.getByTestId('deep-anchor').scrollIntoViewIfNeeded();
        await page.getByTestId('deep-anchor').click();


        //2x scroll By 1000PX

        //page .eavaluate is javascript function which is used to execute the javascript code in the browser context
        await page.evaluate(() => window.scrollBy(0,1000));
        await page.pause();

        //scroll to end
        await page.evaluate(()=> window.scrollTo(0,document.body.scrollHeight));

        await expect(page.getByTestId('cta-button')).toBeEnabled();
      //jump back to top

      await page.evaluate(()=> window.scrollTo(0,0));

        //lazy list grows past 10 once

        await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();

        const list=page.getByTestId('lazy-list');
        const initialcount= await list.count();

         await page.getByTestId('lazy-item-10').scrollIntoViewIfNeeded();
         const updatedCount= await list.count();
          await list.last().scrollIntoViewIfNeeded();
          await list.nth(10).scrollIntoViewIfNeeded();
        //poll until new items opened

        await expect.poll(async()=> list.count(),{
            message: 'expected items <10',
            timeout: 5000,


        }).toBeGreaterThan(initialcount);



    })
})