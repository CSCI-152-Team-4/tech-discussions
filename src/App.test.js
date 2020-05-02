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
  await page.goto("http://localhost:3000/login");

});
afterEach(async()=> {
  await browser.close();
});

test('clicking button', async ()=>{
//await page.click("Button.MuiButtonBase-root");
const url = await page.url();
console.log(url);
expect(url).toMatch("http://localhost:3000/login");
});
