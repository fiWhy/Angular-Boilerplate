describe("First app testing", function () {
    let AppService;
    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject((_AppService_) => {
        AppService = _AppService_;
    }))

    it("should check for data", function () {
        let data = 'Hello World!';
        expect(AppService.checkForData(data)).toBe(data);
    });
});

