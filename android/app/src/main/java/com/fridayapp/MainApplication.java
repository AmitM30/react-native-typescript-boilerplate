package com.fridayapp;


import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

    private final ReactNativeHost mReactNativeHost =
        new NavigationReactNativeHost(this) {
            @Override
            public boolean getUseDeveloperSupport() {
                return BuildConfig.DEBUG;
            }
            @Override
            protected List<ReactPackage> getPackages() {
                @SuppressWarnings("UnnecessaryLocalVariable")
                List<ReactPackage> packages = getPackages();
                // Packages that cannot be autolinked yet can be added manually here, for example:
                // packages.add(new MyReactNativePackage());
                return packages;
            }
            @Override
            protected String getJSMainModuleName() {
                return "index";
            }
        };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                // eg. new VectorIconsPackage()
        );
    }

//    @Override
//    protected ReactGateway createReactGateway() {
//        ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
//            @Override
//            protected String getJSMainModuleName() {
//                return "index";
//            }
//        };
//
//        return new ReactGateway(this, isDebug(), host);
//    }

//    @Override
//    public boolean isDebug() {
//        return BuildConfig.DEBUG;
//    }
}