# Pages
The original project used a logic of pressing buttons to render different charts. Instead I want a page / router logic: each page will have a title, subtitle, plots and cards. Make a header navbar that allows for navigating the different pages.

# Charts as components
In the current development I cannot reuse the same chart as a component because the data is part of the component itself. I want the data of the charts to be part of the page component, so I can reuse the same chart on different pages. The styling can still be unique to each chart

# Card Grid and Card components
I want to create cards to present "the most" or "the least". This card should have prop fields for the title (i.e. "The best quarter"), a boolean field to render a green triangle pointing up (true) or a red triangle pointing down (false) and a string field to the data to be enphasized (a number or a date, etc..). These cards are part of a Card Grid Component, a flex layout that can render multiple cards.

# OBS
Right now make a single page. This page must have from top to bottom: title, subtitle, StackedBarChart component, CardGridComponent with 3 Cards. Let me manually fill the card props.