var testContext = require.context('./', true, /\.spec\.ts/);
var bundleContext = require.context('./', false, /(vendor|app)\.ts/);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

bundleContext('./vendor.ts');
bundleContext('./test.vendor.ts');
bundleContext('./app.ts');


requireAll(testContext);