// && - AND operator - both side need to be true
// || - OR operator - just one side need to be true

let isVerified = true
let isLoggedin = true
let hasPaymentToken = true
let isGuest = true

if (isVerified && isLoggedin && hasPaymentToken) {
    console.log('Greeting message to user');
    console.log('Grant access to paid course');
} else if (isVerified || isGuest) {
    console.log('Allow free previews');
} else {
    console.log('MESSAGE: Please contact Admin');
}