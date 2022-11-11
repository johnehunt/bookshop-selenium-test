const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

describe("A bookshop web app", () => {
  it("should have a title of Bookshop App", async () => {
    try {
      const driver = await new Builder().forBrowser("chrome").build();

      await driver
        .get("http://localhost:8082/index.html")
        .then(async () => {
          let title = await driver.getTitle();
          expect(title).toEqual("Bookshop App");
          await driver.close();
          driver.quit();
        });
    } catch (err) {
      console.log(err);
      fail("exception raised");
    }
  });
});
