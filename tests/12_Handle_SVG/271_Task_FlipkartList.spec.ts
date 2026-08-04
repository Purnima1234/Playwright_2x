import{test, expect, Locator} from '@playwright/test';

const URL="https://www.flipkart.com/search?q=macmini&sid=6bo%2Cnl4&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_1_7_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_7_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=macmini%7CDesktop+PCs&requestId=4ec564ff-32cd-4627-918a-4deeb49f7fba&as-searchtext=macmini";

test.describe("FlipKart search and list", () =>{

    test.beforeEach(async ({page})=> {
        await page.goto(URL);
        await page.getByPlaceholder("Search for Products, Brands and More").fill("macmini");
        await page.getByText("macmini", {exact:true}).click();


    })

    test("TC#1 find the list of all mac mini names", async ({page})=>{

        // Step 1: Get each product card by its data-id attribute
        const cards: Locator[] = await page.locator("//div[@data-id]").all();

        // Step 2: Build an array of { title, price } objects
        // Look for title and price INSIDE each card — avoids mismatch when some products have no price
        const products: { title: string; price: number }[] = [];

        for (const card of cards) {
            const titleEl = card.locator("a.pIpigb");
            const priceEl = card.locator("div.hZ3P6w");

            // Skip card if it has no title or no price (e.g. "Coming Soon" products)
            if (await titleEl.count() === 0 || await priceEl.count() === 0) continue;

            const title = (await titleEl.textContent()) ?? '';
            const priceText = (await priceEl.textContent()) ?? '0';

            // Convert "₹84,900" → 84900  (remove ₹ symbol and commas)
            const price = parseInt(priceText.replace(/[₹,]/g, ''));

            products.push({ title, price });
        }

        // Step 3: Sort by price — lowest first
        products.sort((a, b) => a.price - b.price);

        // Step 4: Print all products sorted by price
        console.log('\n--- All Mac Mini Products (Sorted by Price) ---');
        for (const p of products) {
            console.log(`₹${p.price.toLocaleString('en-IN')}  →  ${p.title}`);
        }

        // Step 5: Show the cheapest one
        console.log('\n--- Cheapest Mac Mini ---');
        console.log(`₹${products[0].price.toLocaleString('en-IN')}  →  ${products[0].title}`);

    })
})
