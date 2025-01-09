import { TestBed } from "@angular/core/testing";
import {HttpClientTestingModule ,HttpTestingController} from "@angular/common/http/testing"
import { AllserviceService } from "./allservice.service";

fdescribe("CallingApiService" ,()=>{
    let callingApiService :AllserviceService,
    httpTestingController : HttpTestingController
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[AllserviceService]
        })
        callingApiService =TestBed.inject(AllserviceService)
        
        httpTestingController =TestBed.inject(HttpTestingController)
    })
    it("Tetsting api ",()=>{
        callingApiService.getTestData().subscribe(res =>{
           expect(res).toBeTruthy("exames api has issue");
           expect(res.messsage).toBe("success")
           const test =res.subjects.find((test: { _id: string; }) => test._id == "670037f6728c92b7fdf434fc")
           expect (test.name).toBe("HTML")
        })
        const req =httpTestingController.expectOne('https://exam.elevateegy.com/api/v1/subjects')
        expect(req.request.method).toBe("GET")
        req.flush({payload: Object.values(req)})
        
    })

})


