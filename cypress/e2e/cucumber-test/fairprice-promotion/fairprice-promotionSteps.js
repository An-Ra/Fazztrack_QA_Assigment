import { Given,Then } from "@badeball/cypress-cucumber-preprocessor/lib/methods";
const pageObjectPWP =require('../../../support/pageObject/pageObjectPWP')
let pageObject = new pageObjectPWP();

Given(/^I setup viewport for (.+)$/,(type)=>{
    pageObject.viewport(type)
});
Given(/^I Open Fairprice Website$/,()=>{
    pageObject.visit('/')
})

Then(/^I click Menu Promotion$/,()=>{
    pageObject.clickMenuPromotion();
})
Then(/^I Verify Category PWP is Visible$/,()=>{
    pageObject.categoryPWPisVisible();
})
Then(/^I Verify Category Weeklydeals is Visible$/,()=>{
    pageObject.categoryWeeklyDealsisVisible();
})
Then(/^I Verify Category Digital Club Exclusive is Visible$/,()=>{
    pageObject.categoryWeeklyDealsisVisible();
})
Then(/^I Click Category All$/,()=>{
    pageObject.clickCategoryAll();
})
Then(/^I Click First time Category PWP$/,()=>{
    pageObject.clickCategoryPWP({ force: true });
})
Then(/^I Click Second time Category PWP$/,()=>{
    pageObject.clickCategoryPWP();
})
Then(/^I Verify Every Product Have Label (\w+)$/,(label)=>{
    pageObject.verifyLabelPWP(label);
})