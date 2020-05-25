function main() {
    function getCampaignBudgets() {
        var campaignIterator = AdsApp.campaigns().get(); // Get methods from Google Ads api
        var campBudgets = [];
        var i;

        while (campaignIterator.hasNext()) {
            var campaign = campaignIterator.next();
            if (campaign.isEnabled()) {
                var budget = campaign.getBudget();
                var budgetCampaignIterator = budget.campaigns().get();
                var diaBudget = budget.getAmount();
                var stats = campaign.getStatsFor('LAST_MONTH');
                var dayCost = stats.getCost() / 30.4;  // Converting monthly cost to daily cost. Google Ads determines
                                                       // daily budget by dividing the monthly budget by 30.4. Cost 
                                                       // should be calculated the same way
                Logger.log('Campaign :' + campaign.getName()); 
                Logger.log('Budget amount :' + diaBudget);
                Logger.log('Daily cost :' + dayCost.toFixed(2));
                Logger.log(' ');

                campBudgets.push(diaBudget);

                for (i = 0; i < campBudgets.length - 1; i++) {
                    diaBudget += campbudgets[i];
                }

                if (campaign.getName() === "My Display Campaign") { // Getting campaign to be paused
                    campaign.pause(); // Pausing campaign that costs $7.00
                } else if (campaign.getName() === "My Awesome CPA Campaign") { // Getting campaign to be increased
                    var cpaBudget = budget.getAmount();
                    var newBudget = cpaBudget + 7; // Add paused campaign's daily budget to this campaign's daily budget
                    campaign.getBudget().setAmount(newBudget);  // Set new budget
                    Logger.log("Campaign with name = " + campaign.getName() +
                        ' budget changed to = ' + campaign.getBudget().getAmount() +
                        ' enabled: ' + campaign.isEnabled());
                    Logger.log(' ');
                }
            }
        }
        Logger.log('Total daily budget: ' + diaBudget);
        Logger.log('Monthly budget: ' + (diaBudget * 30.4));
        Logger.log(campBudgets);
    }

    getCampaignBudgets();
}
