# adapt-theme-ko  

**adapt-theme-ko** is a master theme used by the King's Online team to create themes from April 2018 onwards.

## Creating a new theme

To create a new theme you should duplicate this folder. Remove the `.git` folder, rename the folder to the name of the theme. Then create a new Git project by adding it into your Git client.

## Features

### No menus

The King's Online team has decided that we don't need menus in our Adapt courses so we have got rid of them. We use Contents instead!

### Contents

Adapt-contents is an extension that is created by the King's Online team and acts shows the student the page structure and as well as where they are on the current page.

### Quicknav

Quicknav sits on the bottom of the page and the student uses it acts as another option for the student to navigate to the next page.

### Print page

Accessibility is something the King's Online team keeps as a priority and we think that having a printable course is something that all students can appreciate. We use the Print page extension also created by KO to add a print icon the navigation bar and apply the CSS styling to the page to make it look good when printing.

### Fonts

All the King's style fonts have been added.

### Handlebars

Custom handlebars file have been added for:

*  accordion
*  close
*  quicknav-background


### LESS

LESS files have been created for all the components and extensions that users may use. On top of what is in Vanilla this also includes:

  *  component-icon
  *  contents
  *  flipcard
  *  goTop
  *  kaltura
  *  social
  *  stacklist
  *  print
  *  triggered
  *  tooltip - see below

If you use a new extension and component and want to see a need to have theme specific styling create a new less file and add it here.

### Custom CSS

We've implemented Custom CSS for the following:

  * Blockquote - allows you to have embed quotes
  * Print - If you use adapt-print


### tooltip

A feature that implements a hover state for specific words. Add the code below in any component to use.

`<a class="tooltip">Label name<span>When you hover on the anchor text I will appear</span></a>`

# Stuff from vanilla

## Settings overview

Unlike most Adapt plug-ins, the **Vanilla** theme has no attributes that are required to be configured in the course JSON files. There is, however, an option to alter the background color of blocks as desired. Configure the attributes highlighted below in *blocks.json*. These attributes are properly formatted as JSON in [*example.json*](https://github.com/adaptlearning/adapt-contrib-vanilla/blob/master/example.json).

#### **blocks.json**
**_theme** (object): The theme attributes group contains attributes that override those set in **Vanilla**. These include **_backgroundColor**, **_minimumHeights**, and **_isDividerBlock**.

>**_backgroundColor** (string): This value is the name of a color variable that has been defined in  *less/colors.less*. Omit the initial `@` that is a part of the variable declaration. For example, an acceptable value is `"background-color-inverted"`.  

>**_minimumHeights** (object): The minimum heights attribute group specifies the minimum height of the block at different device widths (`_large`, `_medium`, and `_small`).   

>>**_large** (number): This value specifies the CSS minimum height when `Adapt.device.screenSize'` evaluates to `"_large"`.  

>>**_medium** (number): This value specifies the CSS minimum height when `Adapt.device.screenSize'` evaluates to `"_medium"`.   

>>**_small** (number): This value specifies the CSS minimum height when `Adapt.device.screenSize'` evaluates to `"_small"`.   

>**_isDividerBlock** (boolean): - Determines whether the CSS class `divider-block` *(less/src/theme-extras.less)* will be applied. Acceptable values are `true` and `false`.

Visit the [**Vanilla** wiki](https://github.com/adaptlearning/adapt-contrib-vanilla/wiki) for more information about how to use and manipulate the theme.  

## Structure  

| Folder/File         | Description  |
| :-------------      |:-------------|
| 📄 theme.json        | Pixel values for `screenSize`(`small`, `medium`, and `large`)|
| 📄 selection.json    | File used for selecting icons at [IcoMoon.io](https://icomoon.io/) that are packaged in fonts/vanilla.* |
| 📁 assets            | Location of theme assets (for example: images, loading gif, etc.)|
| 📁 fonts             | Location of any theme font files |
| 📁 js                | JavaScript files on which the theme depends      |
| 📁 less              | Location of any [LESS](http://lesscss.org/) based CSS files |
| 📄 less/generic.less | Variables that are not covered by those defined in colors.less, fonts.less, and paddings.less   |
| 📁 less/src          | Location of LESS files for various Adapt elements |
| 📄 less/src/theme-extras.less| Classes used for bespoke styling |
| 📁 templates         | Location of overridden HTML (.hbs) templates |
| 📁 templates/partials| Location of overridden HTML (.hbs) templates required by other templates, specifically buttons.hbs, component.hbs, and state.hbs |  

## Templates

**Vanilla** supports customisation for the rendering of various Adapt elements through the use of [Handlebars](http://handlebarsjs.com/) templates.  The file name of the template indicates the element it affects. Among the available templates are:
* article.hbs
* block.hbs
* loading.hbs
* navigation.hbs
* page.hbs

## Limitations

No known limitations.  

----------------------------
**Version number:**  2.1.0   <a href="https://community.adaptlearning.org/" target="_blank"><img src="https://github.com/adaptlearning/documentation/blob/master/04_wiki_assets/plug-ins/images/adapt-logo-mrgn-lft.jpg" alt="adapt learning logo" align="right"></a>
**Framework versions:**  2.1.0     
**Author / maintainer:** Adapt Core Team with [contributors](https://github.com/adaptlearning/adapt-contrib-vanilla/graphs/contributors)    
**Accessibility support:** WAI AA   
**RTL support:** yes  
**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), Edge 12, IE 11, IE10, IE9, IE8, IE Mobile 11, Safari iOS 9+10, Safari OS X 9+10, Opera    
