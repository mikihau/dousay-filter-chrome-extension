# Douban Dousay Filter -- a Chrome Extension
This extension hides unwanted Douban Guangbo (Dousay) from a [Douban](https://www.douban.com/) user's timeline.

## Installing
_Extension now being reviewed -- will update url when it's made public._

## How It Works
The extension hides Dousays by keyword matches. You can enter your keywords in the popup menu, at one word per line:
<img src="./popup-demo.png" alt="demo of the popup">

Click on the "save" button, and you should be good to go.

## Known Issues
While the keyword matching script should be searching the content of the Dousay itself, currently it searches in all of the DOM Element objects -- because it's easier to implement, and it's less susceptible to frontend changes in [douban.com]. This includes some div, img and other tags, and may create false positives who gets filtered out. But this shouldn't be a huge issue since I expect most keywords in Chinese characters, and DOM tags are Roman characters.