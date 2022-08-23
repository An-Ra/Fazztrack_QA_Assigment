Feature: fairpirce promotion
 I Want Check Every Product in Category PWP

    @Fairprice @Promotion @LabelPWP_1
    Scenario: I want to check every product have label PWP
            Given I setup viewport for macbook-13
            Given I Open Fairprice Website
            Then  I click Menu Promotion
            Then I Verify Category PWP is Visible
            Then I Verify Category Weeklydeals is Visible
            Then I Verify Category Digital Club Exclusive is Visible
            Then I Click Category All
            Then I Click First time Category PWP
            Then I Click Second time Category PWP
            Then I Verify Every Product Have Label PWP
    @Fairprice @Promotion @LabelPWP_2
    Scenario: I want to check every product have invalid label PWP
            Given I setup viewport for macbook-13
            Given I Open Fairprice Website
            Then  I click Menu Promotion
            Then I Verify Category PWP is Visible
            Then I Verify Category Weeklydeals is Visible
            Then I Verify Category Digital Club Exclusive is Visible
            Then I Click Category All
            Then I Click First time Category PWP
            Then I Click Second time Category PWP
            Then I Verify Every Product Have Label PHP
