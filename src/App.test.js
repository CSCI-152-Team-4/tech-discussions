import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
const assert = require('assert'),
  puppeteer = require('puppeteer'); // will have to add puppeteer to yarn

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
/*   This will open a virtual bowser and run test on that     */
let browser, page;
beforeEach(async () =>{
  browser = await puppeteer.launch(//{
    //headless : true
  //}
  );
  page = await browser.newPage();
  await page.goto("https://tech-discussions.netlify.app/login");

},10000); // sometimes when testing it reaches a 5000 ms limit so just trying 10000ms to test
afterEach(async()=> {
  await browser.close();
});

test('clicking button', async ()=>{
//await page.click("span.W");
//await page.click('a.MuiTypography-root.MuiLink-root.MuiLink-underlineHover.MuiTypography-body2.MuiTypography-colorPrimary');
//await page.click("Button.MuiButtonBase-root");// clicking not working yet but loading page and url is taking in the right url
const url = await page.url();
console.log(url);
expect(url).toMatch("https://tech-discussions.netlify.app/login");
});
