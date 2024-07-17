import { test, expect, request} from '@playwright/test';
import {chromium} from '@playwright/test';
import { Context } from 'vm';

test('Api Get', async() =>{

    const apiContext:Context = await request.newContext({ignoreHTTPSErrors:true});
    const apiResponse = await apiContext.get("https://reqres.in/api/users?page=2") ;
    console.log('Api Response : '+ await apiResponse.body());
    expect(apiResponse.ok()).toBeTruthy();

});



test('Api POST', async() =>{

    const apiContext:Context = await request.newContext({ignoreHTTPSErrors:true});
    const apiResponse = await apiContext.post("https://reqres.in/api/users", {
        data : {
            "name": "morpheus",
            "job": "leader"
        }
    }) ;

    console.log('Api Response : '+ await apiResponse.body());
    expect(apiResponse.ok()).toBeTruthy();

});


test('Api PUT', async() =>{

    const apiContext:Context = await request.newContext({ignoreHTTPSErrors:true});
    const apiResponse = await apiContext.put("https://reqres.in/api/users/2", {
        data : {
            "name": "morpheus",
            "job": "zion resident"
        }
    }) ;

    console.log('Api Response : '+ await apiResponse.body());
    expect(apiResponse.ok()).toBeTruthy();

});

test.only('Api DELETE', async() =>{

    const apiContext:Context = await request.newContext({ignoreHTTPSErrors:true});
    const apiResponse = await apiContext.delete("https://reqres.in/api/users/2", {
        data : {
            "name": "morpheus",
            "job": "zion resident"
        }
    }) ;

    console.log('Api Response : '+ await apiResponse.body());
    expect(apiResponse.ok()).toBeTruthy();

});