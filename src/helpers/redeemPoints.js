
export const redeemPoints = async ({ productId }) => {
    const url = 'https://coding-challenge-api.aerolab.co/redeem';
    const bearer = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU4MjNhZDc0MjM1MjAwMWVkOTA5YTQiLCJpYXQiOjE1OTk2MTE4MjF9.Dim4Cie-Odcpo-TO93tdmIuxec6tttl509zgwhMDOJQ`;
    const resp = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ "productId": productId })
        }
    )
    const data = await resp.json();

    console.log("data,", data);
    return data;
}