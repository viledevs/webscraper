
// viledevs 


const scrape = require('website-scraper'); 
const websiteUrl = 'website_url_here';   // put the url of the website you want to scrape. It will be downloaded to the same folder this file is in.
 
scrape({ 
    urls: [websiteUrl], 
    urlFilter: function (url) { 
        return url.indexOf(websiteUrl) === 0; 
    }, 
    recursive: true, 
    maxDepth: 50, 
    prettifyUrls: true, 
    filenameGenerator: 'bySiteStructure', 
    directory: './node-website' 
}).then((data) => { 
    console.log("Entire website succesfully downloaded"); 
}).catch((err) => { 
    console.log("An error ocurred", err); 
}); 

// Written by viledevs, viledevs inc 2024. 
// Use this tool with caution and only for experimental or educational purposes, this tool is not for malicious uses such as copying a site for phishing, 
// I am not responsible for your actions with my code.
