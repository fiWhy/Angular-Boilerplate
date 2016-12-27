describe("First app testing",  () => {
    let AppService;
    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(function(_AppService_) {
        AppService = _AppService_;
    }))

    it("should check for data",  () => {
        let data = 'Hello World!';
        expect(AppService.checkForData(data)).toBe(data);
    });
});

