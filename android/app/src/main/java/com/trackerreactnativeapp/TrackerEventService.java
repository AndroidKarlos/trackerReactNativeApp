package com.trackerreactnativeapp;

import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;

import javax.annotation.Nullable;

public class TrackerEventService extends HeadlessJsTaskService {
    @Nullable
    protected HeadlessJsTaskConfig getTaskConfig(Intent intent){
        Bundle extras = intent.getExtras();

        WritableMap data = extras != null ? Arguments.fromBundle(extras): Arguments.createMap();
        return new HeadlessJsTaskConfig("Tracker", data, 5000, true);
    }

}
