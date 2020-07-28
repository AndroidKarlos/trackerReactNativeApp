package com.trackerreactnativeapp;

import android.content.Intent;
import android.os.Bundle;
import android.os.Build;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class TrackerModule  extends ReactContextBaseJavaModule {

    public static final String REACT_CLASS = "Tracker";
    private static ReactApplicationContext reactContext;

    public TrackerModule(@NonNull ReactApplicationContext reactContext){
        super(reactContext);
        this.reactContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactMethod
    public void startService(int timeTracker){
        Intent mIntent  = new Intent(this.reactContext, TrackerJob.class);
        Bundle mBundle = new Bundle();

        mBundle.putInt("setTimeTracker", timeTracker);
        mIntent.putExtras(mBundle);

        //Verify Version
        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.O){
            this.reactContext.startForegroundService(mIntent);
        }else{
            this.reactContext.startService(mIntent);
        }
    }

    @ReactMethod
    public void stopService(){
        Intent mIntent = new Intent(this.reactContext, TrackerJob.class);
        this.reactContext.stopService(mIntent);
    }
}
