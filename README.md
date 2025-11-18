# CypressDebugTechniques


In this assignment, I corrected a failing test with Cypress using tools like .debug(), cy.log(), extending the timeout, and .then(). The goal was to debug a faulty test script that interacted with the dynamic controls page on internet.herokuapp.com.

I ran a failing test in Cypress, documented the issue, applied debugging tools to gain understanding of what is going wrong, corrected the script in order for it to pass, and show both the faulty version against the fixed one.

The original script assumed that the message to be displayed was, "It's disabled!" when clicking the 'remove' button. But, the actual message displayed on the site is, "It's gone!"

The incorrect assumption is what caused the test to fail.

In addition, the test didn't log any debugging information on the DOM originally, which made it more difficult to understand the issue.

# Debugging Techniques I Used

.debug() to inspect the elements
cy.log() to log the actual message
.then()
Added a timeout of ten seconds to the cy.get #checkbox to make sure Cypress waited long enough for DOM updates, which is a tactic commonly used in debugging when dealing with AJAX pages.

Made sure that the test correctly asserts "It's gone!", waits for the checkbox to disappear, and passes consistently.
