package com.rxnkeylistener;

import android.app.Activity;
import android.util.Log;
import android.view.KeyEvent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.core.DeviceEventManagerModule;

@ReactModule(name = RXNKeyListenerModule.NAME)
public class RXNKeyListenerModule extends ReactContextBaseJavaModule {
    public static final String NAME = "RXNKeyListener";

    private static ReactContext mReactContext;
    private static DeviceEventManagerModule.RCTDeviceEventEmitter mJSModule = null;

    private static RXNKeyListenerModule instance = null;

    public static RXNKeyListenerModule initModule(ReactApplicationContext reactContext) {
        instance = new RXNKeyListenerModule(reactContext);
        return instance;
    }

    protected RXNKeyListenerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mReactContext = reactContext;
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    public static void onKeyDownEvent(int keyCode, KeyEvent keyEvent) {
        if (mJSModule == null) {
            mJSModule = mReactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
        }
        mJSModule.emit("keydown", keyCode);
    }

    public static void onKeyUpEvent(int keyCode, KeyEvent keyEvent) {
        if (mJSModule == null) {
            mJSModule = mReactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
        }
        mJSModule.emit("keyup", keyCode);
    }

}
