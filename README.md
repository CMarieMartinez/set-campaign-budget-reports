# set-campaign-budget-reports
Google Ads script for comparing each campaign's daily cost versus daily budget, setting a campaign's new budget and pausing a campaign

The code is a Google Ads script that calls methods from the Google Ads API.  The methods print a list of the account's enabled campaigns, daily cost and daily budget. In Google Ads, seeing the daily cost and daily budget next to each other can help you manage your budget by seeing if any campaigns are costing more than their targeted daily budget.

While iterating through the campaigns, the code pauses a campaign and adds the paused campaign's budget to another campaign's budget. Strict budget management is especially important for small businesses. This may not be useful for larger campanies with larger budgets. For smaller businesses, increasing one campaign's budget to boost performance often requires pausing a less important campaign to save money.
