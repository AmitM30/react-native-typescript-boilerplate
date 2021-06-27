package com.fridayapp;

import android.view.View;
import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends NavigationActivity {
    @Override
    protected void addDefaultSplashLayout() {
        View view = getLayoutInflater().inflate(R.layout.layout_splash, null);
        setContentView(view);
    }
}
