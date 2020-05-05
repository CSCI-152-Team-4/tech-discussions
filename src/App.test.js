import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
const assert = require('assert'),
  puppeteer = require('puppeteer'); // will have to add puppeteer to yarn
import PostService from '../src/services/Posts'
/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
/*   This will open a virtual bowser and run test on that     */
let browser, page;
beforeEach(async () =>{
  browser = await puppeteer.launch({
    headless : false
  }
  );
  page = await browser.newPage();
  await page.goto("https://tech-discussions.netlify.app/login");

},30000); // sometimes when testing it reaches a 5000 ms limit so just trying 10000ms to test
afterEach(async()=> {
  await browser.close();
});
/*
test("login screen to signup screen", async ()=>{
//await page.goto("https://tech-discussions.netlify.app/signup");
const u = await page.url();
console.log(u);
await page.click('span.Dt');
//await page.click('span.Dt');
//await page.click('a.MuiTypography-root.MuiLink-root.MuiLink-underlineHover.MuiTypography-body2.MuiTypography-colorPrimary');
//await page.click("Button.MuiButtonBase-root");// clicking not working yet but loading page and url is taking in the right url
const url = await page.url();
console.log(url);
expect(url).toMatch("https://tech-discussions.netlify.app/signup");
});

test("sign in screen to login screen",async()=>{
  await page.goto("https://tech-discussions.netlify.app/signup");
  await page.click("a.MuiTypography-root.MuiLink-root.MuiLink-underlineHover.MuiTypography-body2.MuiTypography-colorPrimary");
  const url = await page.url();
  console.log(url);
  expect(url).toMatch("https://tech-discussions.netlify.app/login");
});
*/
/*
test("home screen to setting screen",async()=>{
  await page.goto("https://tech-discussions.netlify.app/home");
  await page.click("span.MuiIconButton-label");
  await page.click("div.E");
  const url = await page.url();
  console.log(url);
  expect(url).toMatch("https://tech-discussions.netlify.app/settings");
});

test("Setting screen to home screen",async()=>{
  await page.goto("https://tech-discussions.netlify.app/settings");
  await page.click("span.MuiIconButton-label");
  //await page.click("span.MuiTouchRipple-root");
  await page.click("div.MuiListItemText-root");
  const url = await page.url();
  console.log(url);
  expect(url).toMatch("https://tech-discussions.netlify.app/home");
});

test("Home screen to message screen",async()=>{
  await page.goto("https://tech-discussions.netlify.app/home");
  await page.click("span.MuiIconButton-label");
  //await page.click("span.MuiTouchRipple-root");
  await page.click("div.C");
  const url = await page.url();
  console.log(url);
  expect(url).toMatch("https://tech-discussions.netlify.app/messages");
});
test("Home screen to logout screen",async()=>{
  await page.goto("https://tech-discussions.netlify.app/home");
  await page.click("span.MuiIconButton-label");
  //await page.click("span.MuiTouchRipple-root");
  await page.click("div.M");
  const url = await page.url();
  console.log(url);
  expect(url).toMatch("https://tech-discussions.netlify.app/login");
});

test("Message Screen to home screen ",async()=>{
  await page.goto("https://tech-discussions.netlify.app/messages");
  await page.click("span.MuiIconButton-label");
  //await page.click("span.MuiTouchRipple-root");
  await page.click("div.MuiListItemText-root");
  const url = await page.url();
  console.log(url);
  expect(url).toMatch("https://tech-discussions.netlify.app/home");
});
test("message screen to settings screen" , async()=>{
  await page.goto("https://tech-discussions.netlify.app/messages");
  await page.click("span.MuiIconButton-label");
  //await page.click("span.MuiTouchRipple-root");
  await page.click("div.E");
  const url = await page.url();
  console.log(url);
  expect(url).toMatch("https://tech-discussions.netlify.app/settings");
});

test("message screen to settings screen",async()=>{
  await page.goto("https://tech-discussions.netlify.app/messages");
  await page.click("span.MuiIconButton-label");
  //await page.click("span.MuiTouchRipple-root");
  await page.click("div.M");
  const url = await page.url();
  console.log(url);
  expect(url).toMatch("https://tech-discussions.netlify.app/login");
});

test("settings screen to message screen",async()=>{
  await page.goto("https://tech-discussions.netlify.app/settings");
  await page.click("span.MuiIconButton-label");
  //await page.click("span.MuiTouchRipple-root");
  await page.click("div.C");
  const url = await page.url();
  console.log(url);
  expect(url).toMatch("https://tech-discussions.netlify.app/messages");
});

test("settings screen to logout",async()=>{
  await page.goto("https://tech-discussions.netlify.app/settings");
  await page.click("span.MuiIconButton-label");
  //await page.click("span.MuiTouchRipple-root");
  await page.click("div.M");
  const url = await page.url();
  console.log(url);
  expect(url).toMatch("https://tech-discussions.netlify.app/login");
});

test("home screen to new post screen",async()=>{
  await page.goto("https://tech-discussions.netlify.app/home");
  //await page.click("button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorInherit");
  await page.click("div.Z");
  //await page.click("span.MuiTouchRipple-root");
  //await page.click("div.MuiListItemText-root");
  const url = await page.url();
  console.log(url);
  expect(url).toMatch("https://tech-discussions.netlify.app/post/new");
});

test("home screen to new post screen",async()=>{
  await page.goto("https://tech-discussions.netlify.app/home");
  //await page.click("button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorInherit");
  await page.click("div.Z");
  //await page.click("span.MuiTouchRipple-root");
  //await page.click("div.MuiListItemText-root");
  const url = await page.url();
  console.log(url);
  expect(url).toMatch("https://tech-discussions.netlify.app/post/new");
});

it('gets posts', async () => {
  const res = await PostService.getPosts(1)
  expect(res instanceof Array).toBe(true)
  expect(res.length === 1).toBe(true)
  expect(typeof res[0].title === "string").toBe(true)
});
it("no body",async()=>{
const res = await PostService.getPosts(1);
expect(res instanceof Array).toBe(true);
expect(res.length === 0).toBe(false);
expect(typeof res[0].title === "string").toBe(true);
});
it("no title",async()=>{
  const res = await PostService.getPosts(1);
  expect(res instanceof Array).toBe(true);
  expect(res.length === 1).toBe(true);
  expect(typeof res[0].title !== "string").toBe(false);
  });
  it("no title and body",async()=>{
    const res = await PostService.getPosts(1);
    expect(res instanceof Array).toBe(true);
    expect(res.length === 0).toBe(false);
    expect(typeof res[0].title !== "string").toBe(false);
    });
    
    it("fail posts",async()=>{
      const res = await PostService.getPosts(1);
      expect(res instanceof Array).toBe(false);
      expect(res.length === 0).toBe(false);
      expect(typeof res[0].title !== "string").toBe(false);
      });
      */