# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# React Native specific rules
-keep class com.facebook.react.** { *; }
-keep class com.facebook.jni.** { *; }
-keep class com.facebook.soloader.** { *; }
-keep class com.facebook.flipper.** { *; }

# Supabase specific rules
-keep class io.supabase.** { *; }
-keep class com.supabase.** { *; }

# Keep all classes in your app package
-keep class com.practiceapp.** { *; }

# Keep all React Native modules
-keep class com.reactnativecommunity.** { *; }
-keep class com.oblador.** { *; }
-keep class com.th3rdwave.** { *; }
-keep class com.BV.** { *; }
