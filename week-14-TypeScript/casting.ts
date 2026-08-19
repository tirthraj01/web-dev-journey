let responseData: any = "This is a string from an API fetch";

// Two ways to assert the type:
let stringLength1 = (responseData as string).length;
let stringLength2 = (<string>responseData).length;
