import {test, expect} from '@playwright/test';

test.describe('Expected Assertions', ()=>{

    test("Expected assertions", async ({page})=>{
        expect(2+2).toBe(4);
        //here expect(2+2) is actual toBe is expected value
      expect({role: 'admin'}).toEqual({role: 'admin'});
      expect({age:25}).toEqual({age:25});
      expect({age:25}).not.toEqual({age:26});
      expect([1,2,3]).toContain(2);
      expect([1,2,3]).not.toContain(4);
      expect('Hello').toMatch(/ello/);
      expect('Hello').not.toMatch(/ello1/);
    })
})