import CanvasContext from "./api/CanvasContext"
import wx_cloud from "./my.cloud"
import onekit from "./onekit"
export default class my {
  static triggerEvent(THIS,eventName, data){
    eventName = onekit.firstUpper(eventName);
    return THIS.props["on"+eventName](data);
  }
  /////////////////// animation //////////////////////////
  static createAnimation(object) {
    return swan.createAnimation(object);
  }

  ///////////////// basic ////////////////////////////////
  static canIUse(string) { return swan.canIUse(string); }
  static getSystemInfo(object) {return swan.getSystemInfo(object);}
  static getSystemInfoSync(object) { return (swan.getSystemInfoSync(object));}
  static base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+');
    let commonContent = Buffer.from(base64, 'base64');
    return commonContent;
  }
  static arrayBufferToBase64(arrayBuffer) {
    let base64Content = Buffer.from(arrayBuffer).toString('base64');
    return base64Content;
  }
  static getUpdateManager(object) { return swan.getUpdateManager(object); }
  static getLaunchOptionsSync(object) { return swan.getLaunchOptionsSync(object); }
  static offPageNotFound(object) { return swan.offPageNotFound(object); }
  static onPageNotFound(object) { return swan.onPageNotFound(object); }
  static offError(object) { return swan.offError(object); }
  static onError(object) { return swan.onError(object); }
  static offAppShow(object) { return swan.offAppShow(object); }
  static onAppShow(object) { return swan.onAppShow(object); }
  static offAppHide(object) { return swan.offAppHide(object); }
  static onAppHide(object) { return swan.onAppHide(object); }
  static setEnableDebug(object) { return swan.setEnableDebug(object); }
  static getLogManager(object) { return swan.getLogManager(object); }
  static rsa(Object ) { return /*swan.esa(object)*/ console.log("暂不支持"); }
  /////////////////// Canvas ///////////////////
  static drawCanvas(object) {
    var canvasId = object.canvasId;
    var actions = object.actions;
    var canvasContext = swan.createCanvasContext(canvasId);
    for (var action of actions) {
      var data = action.data;
      switch (action.method) {
        case "save":
          canvasContext.save();
          break;
        case "restore":
          canvasContext.restore();
          break;
        case "setFillStyle":
          canvasContext.setFillStyle(onekit.color.array2str(data[1]));
          break;
        case "setStrokeStyle":
          canvasContext.setStrokeStyle(onekit.color.array2str(data[1]));
          break;
        case "setFontSize":
          canvasContext.setFontSize(data[0]);
          break;
        case "setGlobalAlpha":
          canvasContext.setGlobalAlpha(data[0]);
          break;
        case "setShadow":
          var dat = data[3];
          canvasContext.setShadow(data[0], data[1], data[2], onekit.color.array2str(data[3]));
          break;
        case "setStrokeStyle":
          canvasContext.setStrokeStyle(onekit.color.array2str(data));
          break;
        case "drawImage":
          canvasContext.drawImage.apply(canvasContext, data)
          break;
        case "fillText":
          canvasContext.fillText.apply(canvasContext, data)
          break;
        case "setLineCap": canvasContext.setLineCap(data[0]); break;
        case "setLineJoin": canvasContext.setLineJoin(data[0]); break;
        case "setLineWidth": canvasContext.setLineWidth(data[0]); break;
        case "setMiterLimit": canvasContext.setMiterLimit(data[0]); break;
        case "rotate": canvasContext.rotate(data[0]); break;
        case "scale": canvasContext.scale(data[0], data[1]); break;
        case "translate": canvasContext.translate(data[0], data[1]); break;
        case "strokePath":
          canvasContext.beginPath()
          for (var dat of data) {
            var dt = dat.data;
            switch (dat.method) {
              case "rect": canvasContext.strokeRect(dt[0], dt[1], dt[2], dt[3]); break;
              case "moveTo": canvasContext.moveTo(dt[0], dt[1]); break;
              case "lineTo": canvasContext.lineTo(dt[0], dt[1]); break;
              case "closePath": canvasContext.closePath(); break;
              case "arc": canvasContext.arc.apply(canvasContext, dt); break;
              case "quadraticCurveTo": canvasContext.quadraticCurveTo.apply(canvasContext, dt); break;
              case "bezierCurveTo": canvasContext.bezierCurveTo.apply(canvasContext, dt); break;

              default:
                console.log("[drawCanvas-strokePath]", dat.method);
                break;
            }
          }
          canvasContext.stroke()
          break
        case "fillPath":
          for (var dat of data) {
            var dt = dat.data;
            switch (dat.method) {
              case "rect": canvasContext.fillRect(dt[0], dt[1], dt[2], dt[3]); break;
              case "arc": canvasContext.arc.apply(canvasContext, dt); break;
              default:
                console.log("[drawCanvas-fillPath]", dat.method);
                break;
            }
          }
          canvasContext.fill()
          break;
        case "clearRect": canvasContext.clearRect(data[0], data[1], data[2], data[3]); break;
        default:
          console.log("[drawCanvas]", action.method);
          break;
      }
    }
    canvasContext.draw();
  }
  static createContext() {
    var context = new CanvasContext();
    return context;
  }
  static createCanvasContext(object) {
    return swan.createCanvasContext(object);
  }
  static canvasToTempFilePath(object) {
    var object2 = {
      canvasId: object.canvasId
    }
    object2.success = function(res) {
      var result = {
        errMsg: "canvasToTempFilePath:ok",
        tempFilePath: res.apFilePath
      };
      if (object.success) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return swan.canvasToTempFilePath(object2);
  }
  static canvasPutImageData(object) { return swan.canvasPutImageData(object) };
  static canvasGetImageData(object) { return swan.canvasGetImageData(object) };
  ////////////// Device //////////////////
  static onBeaconServiceChange(object) { return swan.onBeaconServiceChange(object); }
  static onBeaconUpdate(object) { return swan.onBeaconUpdate(object); }
  static getBeacons(object) { return swan.getBeacons(object); }
  static stopBeaconDiscovery(object) { return swan.stopBeaconDiscovery(object); }
  static startBeaconDiscovery(object) { return swan.startBeaconDiscovery(object); }
  static stopWifi(object) { return swan.stopWifi(object); }
  static startWifi(object) { return swan.startWifi(object); }
  static setWifiList(object) { return swan.setWifiList(object); }
  static onWifiConnected(object) { return swan.onWifiConnected(object); }
  static onGetWifiList(object) { return swan.onGetWifiList(object); }
  static getWifiList(object) { return swan.getWifiList(object); }
  static getConnectedWifi(object) { return swan.getConnectedWifi(object); }
  static connectWifi(object) { return swan.connectWifi(object); }
  static setNavigationBar(object) { return swan.setNavigationBarTitle(object); };
  //
  static onAccelerometerChange(callback) {
    swan.onAccelerometerChange(function(res) {
      if (swan._stopAccelerometer) {
        return;
      }
      callback(res);
    });
  }
  static stopAccelerometer(object) {
    swan._stopAccelerometer = true;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  static startAccelerometer(object) {
    swan._stopAccelerometer = false;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  static getBatteryInfoSync(object) { return swan.getBatteryInfoSync(object); }
  static _getBatteryInfo(result) {
    swan.getSystemInfo({
      success: (res) => {
        var percent = res.currentBattery;
        function toPoint(percent) {
          var str = percent.replace("%", "");
          str = str / 100;
          return str;
        }
        toPoint(percent);
        var results = toPoint(percent);
        result.level = results
      }
    })
    return result;
  }
  static getBatteryInfo(object) {
    var object2 = {}
    object2.success = function(res) {
      var result = {
        errMsg: "getBatteryInfo:ok",
        isCharging: false,
      }
      result = swan._getBatteryInfo(result);
      if (object.success) { object.success(result); }
      if (object.fail) { object.fail(result); }
    },
      object2.fail = function(res) {
        if (object.success) { object.success(res); }
        if (object.fail) { object.fail(res); }
      }
    return swan.getSystemInfo(object2);
  }
  //
  static getClipboard(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
            object2["success"] = function(res) {
              object[key]({ text: res.data });
            };
            break;
          case "complete":
            object2["complete"] = function(res) {
              if (res.text) {
                res = { text: res.data };
              }
              object["complete"](res);
            };
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return swan.getClipboardData(object2);
  }
  static setClipboard(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "text":
            object2["data"] = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return swan.setClipboardData(object2);
  }
  static onCompassChange(callback) {
    swan.onCompassChange(function(res) {
      if (swan._stopCompass) {
        return;
      }
      callback(res); s
    });
  };
  static stopCompass(object) {
    swan._stopCompass = true;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  };
  static startCompass(object) {
    swan._stopCompass = false;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  };
  static addPhoneContact(object) {
    var object2 = {};
    var errMsg;
    var result = {
      errMsg: errMsg
    }
    object2.success = function(res) {
      result.errMsg = "addPhoneContact:ok"
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function(res) {
      result.errMsg = "addPhoneContact:fail cancel"
      if (object.fail) {
        object["fail"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    return swan.addPhoneContact(object2);
  }
  static onGyroscopeChange(callback) {
    swan.onGyroscopeChange(function(res) {
      if (swan._stopGyroscope) {
        return;
      }
      callback(res);
    });
  }
  static stopGyroscope(object) {
    swan._stopGyroscope = true;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  static startGyroscope(object) {
    swan._startGyroscope = false;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  //
  static onDeviceMotionChange(object) { return swan.onDeviceMotionChange(object); }
  static stopDeviceMotionListening(object) { return swan.stopDeviceMotionListening(object); }
  static startDeviceMotionListening(object) { return swan.startDeviceMotionListening(object); }
  static startDeviceMotionListening(object) { return swan.startDeviceMotionListening(object); }
  //
  static getNetworkType = function(object) {
    var object2 = {};
    for (var key in object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    object2.success = function(res) {
      var result = { networkType: my._network(res).networkType };
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return swan.getNetworkType(object2);
  }
  static _network = function(res) {
    var networkType;
    if (res.networkAvailable) {
      switch (res.networkType) {
        case "WWAN": 
          networkType = "WIFI";
          break;
        default:
          networkType = res.networkType;
          break;
      }
    } else {
      networkType = "NONE";
    }
    return { isConnected: res.networkAvailable, networkType: networkType.toLowerCase() };
  }
  static onNetworkStatusChange = function(callack) {
    swan.onNetworkStatusChange(function(res) {
      callack(swan._network(res));
    });
  }


  //
  static makePhoneCall = function(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "number":
            object2["phoneNumber"] = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }

      return swan.makePhoneCall(object2);
    }
  }

  static scan = function(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "hideAlbum":
            object2["onlyFromCamera"] = object[key];
            break;
          case "type":
            object2["scanType"] = object[key];
            break;
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function(res) {
        var result = {};
        if (res.result) {
          result.charSet = "UTF-8";
          result.result = res.result;
          if (res.qrCode) {
            result.scanType = "QR_CODE";
          } else if (res.barCode) {
            result.scanType = "EAN_8";
          }
        }
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      }
      object2.fail = function(res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    }
    return swan.scanCode(object2);
  }
  //
  static vibrate (object) {return console.log("此功能尚未开放")}
  static vibrateLong(object) {
    var object2 = {}
    object2.success = function(res) {
      var result = {
        errMsg: "vibrateLong:ok"
      }
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    }
    return swan.vibrateLong(object2);
  }
  static vibrateShort(object) {
    var object2 = {}
    object2.success = function(res) {
      var result = {
        errMsg: "vibrateShort:ok"
      }
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    }
    return swan.vibrateShort(object2);
  }
  //
  static onMemoryWarning(object) { return swan.onMemoryWarning(object); }
  static offMemoryWarning(callback) { return swan.offMemoryWarning(callback); }
  //
  static writeBLECharacteristicValue(object) { return swan.writeBLECharacteristicValue(object); }
  static readBLECharacteristicValue(object) { return swan.readBLECharacteristicValue(object); }
  static onBLEConnectionStateChange(object) { return swan.onBLEConnectionStateChange(object); }
  static onBLECharacteristicValueChange(object) { return swan.onBLECharacteristicValueChange(object); }
  static notifyBLECharacteristicValueChange(object) { return swan.notifyBLECharacteristicValueChange(object); }
  static getBLEDeviceServices(object) { return swan.getBLEDeviceServices(object); }
  static getBLEDeviceCharacteristics(object) { return swan.getBLEDeviceCharacteristics(object); }
  static createBLEConnection(object) { return swan.createBLEConnection(object); }
  static closeBLEConnection(object) { return swan.closeBLEConnection(object); }
  static offBLECharacteristicValueChange(callback) { return swan.offBLECharacteristicValueChange(callback);} 
  static offBluetoothAdapterStateChange(callback) { return swan.offBluetoothAdapterStateChange(callback);}
  static onBLEConnectionStateChanged(callback) { return swan.onBLEConnectionStateChanged(callback);}
  static offBLEConnectionStateChanged(callback) { return swan.offBLEConnectionStateChange(callback);}
  //
  static stopBluetoothDevicesDiscovery(object) {
    var object2 = {};
    for (var key in object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    return swan.stopBluetoothDevicesDiscovery(object2);
  }
  static startBluetoothDevicesDiscovery(object) {
   return swan.openBluetoothAdapter(object)}
  static openBluetoothAdapter(object) {
    
    return swan.openBluetoothAdapter(object);
  }
  static onBluetoothDeviceFound(object) { return swan.onBluetoothDeviceFound(object); }
  static onBluetoothAdapterStateChange(object) { return swan.onBluetoothAdapterStateChange(object); }
  static getConnectedBluetoothDevices(object) { return swan.getConnectedBluetoothDevices(object); }
  static getBluetoothDevices(object) {
    var object2 = {}
    object2.success = function(res) {
      swan.getBluetoothDevices({
        success: (res) => {
          // console.log("000", res)
          // console.log("000", res.devices)
          result.devices = res.devices
        }
      })
      var result = {
        errMsg: "closeBluetoothAdapter:ok"
      }
      if (object.success) { object["success"](result) }
      if (object.complete) { object["complete"](result) }
    }
    object2.fail = function(res) {
      if (object.success) { object["success"](res) }
      if (object.complete) { object["complete"](res) }
    }
    return swan.getBluetoothDevices(object2);
  }
  static getBluetoothAdapterState(object) { return swan.getBluetoothAdapterState(object); }
  static closeBluetoothAdapter(object) { return swan.closeBluetoothAdapter(object); }
  //
  static connectBLEDevice(object) { return swan.createBLEConnection(object);}
  static disconnectBLEDevice(object) { return swan.closeBLEConnection(object)}
  //
  static stopHCE(object) { return swan.stopHCE(object); }
  static startHCE(object) { return swan.startHCE(object); }
  static sendHCEMessage(object) { return swan.sendHCEMessage(object); }
  static onHCEMessage(object) { return swan.onHCEMessage(object); }
  static getHCEState(object) { return swan.getHCEState(object); }
  //
  static setScreenBrightness(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "brightness": 
            object2["value"] = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return swan.setScreenBrightness(object2);
  }
  static setKeepScreenOn(object) { return swan.setKeepScreenOn(object); }
  static onUserCaptureScreen(object) { return swan.onUserCaptureScreen(object); }
  static offUserCaptureScreen(callback) { return swan.offUserCaptureScreen(callback); }
  static watchShake(object) { return /*swan.watchShake*/console.log("暂不支持")}
  static getServerTime(object) { return /*swan.getServerTime*/console.log("暂不支持") }
  //
  static getScreenBrightness(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function(res) {
      var result = { brightness : res.value };
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return swan.getScreenBrightness(object2);
  }
  /////////////////// Ext //////////////
  static getExtConfigSync(object) { return swan.getExtConfigSync(object) }
  static getExtConfig(object) { return swan.getExtConfig(object) }
  //////////////////// File //////////
  static getFileSystemManager(object) { return swan.getFileSystemManager(object) }
  static getFileInfo(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (res) {
      var res2 = { value: res.brightness };
      if (object.success) {
        object["success"](res2);
      }
      if (object.complete) {
        object["complete"](res2);
      }
    }
    object2.fail = function (res) {
      var res2 = res;
      if (object.fail) {
        object["success"](res2);
      }
      if (object.complete) {
        object["complete"](res2);
      }
    }
    return my.g(object2);
  }

  static removeSavedFile(object) { return swan.removeSavedFile(object) }
  static getSavedFileInfo(object) { return swan.getSavedFileInfo(object) }
  static getSavedFileList(object) { return swan.getSavedFileList(object) }
  static openDocument(object) { return swan.openDocument(object) }
  static saveFile(object) {
    swan.saveFile({
      tempFilePath: object.apFilePath,
      success(res) {
        var result = { savedFilePath: res.savedFilePath};
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      }, fail(res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    });
  };
  //////////// Location ///////////////
  static openLocation(object) { return swan.openLocation(object) }
  static getLocation(object) { return swan.getLocation(object) }
  static chooseLocation(object) { return swan.chooseLocation(object) }
  ////////// Media ////////////////////
  static createMapContext(object) { return swan.createMapContext(object) }
  static compressImage(object) { return swan.compressImage(object) }
  static saveImage (object) { return swan.saveImageToPhotosAlbum(object) }
  static getImageInfo(object) { return swan.getImageInfo(object) }
  static previewImage(object) { return swan.previewImage(object) }
  static chooseImage(object) {
    if (object.count == 0) {
      object.count = 0;
    }
    swan.chooseImage({
      conut: object.count,
      sizeType: object.sizeType,
      sourceType: object.scourceType,
      success: (res) => {
        var apFilePaths = [];
        for (var path of res.tempFilePaths) {
          apFilePaths.push(path)
        }
        var result = {
          apFilePaths: apFilePaths,
        };
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(complete);
        }
      },
      fail: (res) => {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    });
  };
  static saveVideoToPhotosAlbum(object) { return swan.saveVideoToPhotosAlbum(object) }
  static chooseVideo(object) { return swan.chooseVideo(object) }
  static createVideoContext(object) { return swan.createVideoContext(object) }
  static stopVoice(object) { return swan.stopVoice(object) }
  static pauseVoice(object) { return swan.pauseVoice(object) }
  static playVoice(object) { return swan.playVoice(object) }
  static setInnerAudioOption(object) { return swan.setInnerAudioOption(object) }
  static getAvailableAudioSources(object) { return swan.getAvailableAudioSources(object) }
  static createInnerAudioContext(object) { return swan.createInnerAudioContext(object) }
  static createAudioContext(object) { return swan.createAudioContext(object) }
  static onBackgroundAudioStop(object) { return swan.onBackgroundAudioStop(object) }
  static onBackgroundAudioPause(object) { return swan.onBackgroundAudioPause(object) }
  static onBackgroundAudioPlay(object) { return swan.onBackgroundAudioPlay(object) }
  static stopBackgroundAudio(object) { return swan.stopBackgroundAudio(object) }
  static seekBackgroundAudio(object) { return swan.seekBackgroundAudio(object) }
  static pauseBackgroundAudio(object) { return swan.pauseBackgroundAudio(object) }
  static playBackgroundAudio(object) { return swan.playBackgroundAudio(object) }
  static getBackgroundAudioPlayerState(object) { return swan.getBackgroundAudioPlayerState(object) }
  static getBackgroundAudioManager(object) { return swan.getBackgroundAudioManager(object) }
  static createLivePusherContext(object) { return swan.createLivePusherContext(object) }
  static startRecord(object) { return swan.startRecord(object) }
  static stopRecord(object) { return swan.stopRecord(object) }
  static getRecorderManager(object) { return swan.getRecorderManager(object) }
  //////////////// Network ///////////////
  static request(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "headers":
            object2["header"] = object[key];
            break;
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function(res) {
        var result = {
          headers: res.header
        };
        for (var key in object) {
          switch (key) {
            case "status":
              result["statusCode"] = res[key];
              break;
            case "headers":
              result["header"] = res[key];
              break;
            default:
              result[key] = res[key];
              break;
          }
        }
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      }
      object2.fail = function(res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    }
    return swan.request(object2);
  }
   
  static httpRequest(object) { return /*swan.httpRequest(object)*/console.log("暂不支持") }
  static downloadFile(object) { 
    swan.downloadFile({
      url: object.url,
      header:object.header,
      success: object.success,
      fail: object.fail,
      complete: object.complete,
      success: (res) => {
        var apFilePath = "";
        for (var urls of res.tempFilePath) {
          apFilePath.url
        }
        var result = {
          apFilePath: apFilePath,
        };
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(complete);
        }
      },
      fail: (res) => {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    });
   }
  static uploadFile(object) {
    swan.uploadFile({
      url: object.url,
      filePath: object.filePath,
      name:object.fileName,
      fileType: "image",
      header: object.header,
      formData: object.formData,
      success: object.success,
      fail: object.fail,
      complete: object.complete
    });
  };
  //
  static connectSocket(object) { return swan.connectSocket(object) }
  static onSocketError(object) { return swan.onSocketError(object) }
  static onSocketMessage(object) { return swan.onSocketMessage(object) }
  static onSocketClose(object) { return swan.onSocketClose(object) }
  static onSocketOpen(object) { return swan.onSocketOpen(object) }
  static sendSocketMessage(object) { return swan.sendSocketMessage(object) }
  static closeSocket(object) { return swan.closeSocket(object) }
  static offLocalServiceResolveFail(object) { return swan.offLocalServiceResolveFail(object) }
  static onLocalServiceResolveFail(object) { return swan.onLocalServiceResolveFail(object) }
  static offLocalServiceDiscoveryStop(object) { return swan.offLocalServiceDiscoveryStop(object) }
  static onLocalServiceDiscoveryStop(object) { return swan.onLocalServiceDiscoveryStop(object) }
  static offLocalServiceLost(object) { return swan.offLocalServiceLost(object) }
  static onLocalServiceLost(object) { return swan.onLocalServiceLost(object) }
  static offLocalServiceFound(object) { return swan.offLocalServiceFound(object) }
  static onLocalServiceFound(object) { return swan.onLocalServiceFound(object) }
  static stopLocalServiceDiscovery(object) { return swan.stopLocalServiceDiscovery(object) }
  static startLocalServiceDiscovery(object) { return swan.startLocalServiceDiscovery(object) }
  //
  static stopLocalServiceDiscovery(object) { return swan.stopLocalServiceDiscovery(object); }
  static startLocalServiceDiscovery(object) { return swan.startLocalServiceDiscovery(object); }
  static onLocalServiceResolveFail(callback) { return swan.onLocalServiceResolveFail(callback); }
  static onLocalServiceLost(callback) { return swan.onLocalServiceLost(callback); }
  static onLocalServiceFound(callback) { return swan.onLocalServiceFound(callback); }
  static onLocalServiceDiscoveryStop(callback) { return swan.onLocalServiceDiscoveryStop(callback); }
  static offLocalServiceResolveFail(callback) { return swan.offLocalServiceResolveFail(callback); }
  static offLocalServiceLost(callback) { return swan.offLocalServiceLost(callback); }
  static offLocalServiceFound(callback) { return swan.offLocalServiceFound(callback); }
  static offLocalServiceDiscoveryStop(callback) { return swan.offLocalServiceDiscoveryStop(callback); }
  ///////// Open Interface //////////
  static checkSession(object) {
    var object2 = {};
    var now = new Date().getTime();
    if (swan._sessoion && now - swan._sessoion <= 7200 * 1000) {
      var result = { errMsg: "checkSession:ok" };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    } else {
      var res = { errMsg: "checkSession:fail" };
      if (object.fail) {
        object.fail(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    }
    return swan.authorize(object2);
  }

  static login = function(object) {
    var that = this;
    if (!object) {
      return swan.authorize(object);
    }
    var object2 = {
      scopes: "auth_user"
    };
    object2.success = function(res) {
      swan._sessoion = new Date().getTime();
      getApp().onekit.jscode = res.authCode;
      var result = { code: res.authCode };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(complete);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object.fail(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    }
    return swan.authorize(object2);
  };
  static getUserInfo(object) {
    function getUserInfo(jscode, object) {
      swan.getAuthUserInfo({
        success(res) {
          var url = getApp().onekit.server + "userinfo";
          swan.httpRequest({
            url: url,
            header: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            data: {
              nickname: res.nickName,
              avatarUrl: res.avatar,
              js_code: jscode
            },
            success(res) {
              if (object.success) {
                object.success(res.data);
              }
              if (object.complete) {
                object.complete(res.data);
              }
            }, fail(res) {
              console.log(res.data);
            }
          });
        }
      });
    }

    var jscode = getApp().onekit.jscode;
    if (jscode) {
      getUserInfo(jscode, object);
    } else {
      swan.login({
        success: (res) => {
          getUserInfo(res.code, object);
        },
      });
    }
  };
  static getOpenData = function(object) {
    function success(opendata) {
      var opendata = opendata.userInfo;
      getApp().onekit.opendata = opendata;
      for (var cb = 0; cb < getApp().onekit.opendataCallbacks.length; cb++) {
        getApp().onekit.opendataCallbacks[cb](opendata);
      }
      getApp().onekit.opendataCallbacks = [];
      if (object.success) {
        object.success(opendata);
      }
      if (object.complete) {
        object.complete(opendata);
      }
    }
    var opendata = getApp().onekit.opendata;
    if (opendata) {
      if (Object.keys(opendata) > 0) {
        object.success(opendata);
      } else {
        if (object.success) {
          getApp().onekit.opendataCallbacks.push(object.success);
        }
      }
      return;
    }
    getApp().onekit.opendata = {};
    swan.login({
      success(res) {
        var jscode = res.code;
        swan.getAuthUserInfo({
          success(res) {
            var url = getApp().onekit.server + "opendata";
            swan.httpRequest({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: "POST",
              data: {
                nickname: res.nickName,
                avatarUrl: res.avatar,
                js_code: jscode
              },
              success(res) {
                success(res.data);
              }, fail(res) {
                console.log(res);
              }
            });
          }
        });
      }
    })

  };
  static getPhoneNumber = function(object) {
    function getPhoneNumber(jscode, object) {
      swan.getPhoneNumber({
        success(res) {
          //var response = {
          // response: "ZOELfBOrmRHNNiiVR4FmNrvV7Dmog5w/KFaNrfLugkDqdkPzlxBCzmfLBrtQlPptWix+1f9I07p5xNfwGgTgVA==",
          // sign: "fD6CyFQeJTTgtM1uviy5uAm4YWiN3s0crGtD1v5XdXuDzFEBPTRYqGODcfzskAMFWNXJAK5Zx0/kk+6e9tn/N3U9RcrTgc6VLw7HM9fPTcz8CzVl1+b6fjsi0wWsADF53vKTurFn6HTSTEJvzbMMD5M2lgazni72tZHCNJSkeG1W+kjX/Mj5tfJXNkn6nlrtu1N6BxgsZdgDdkMQfIrWv2TOFlpx043LMBmk4CxXLpGvRfRcHLjixs5wEO1dfqENn6oj9hAQbPA8itYW4TvGlo5qhnzT+ya1rWcKrjn4zh7uvnr0hB0oPiqLu17txS5uIQIF0DJ2cC0k6kuOQLVwTQ=="
          // }
          //  JSON.parse(res.response);
          var response = JSON.parse(res.response);
          console.log(response);
          var url = getApp().onekit.server + "phonenumber";
          swan.httpRequest({
            url: url,
            header: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            data: {
              response: response.response,
              sign: response.sign,
              js_code: jscode
            },
            success(res) {
              var data = res.data;
              if (object.success) {
                object.success(data);
              }
              if (object.complete) {
                object.complete(data);
              }
            }, fail(res) {
              console.log(res.data);
            }
          });
        }
      });
    }
    var jscode = getApp().onekit.jscode;
    if (jscode) {
      getPhoneNumber(jscode, object);
    } else {
      swan.login({
        success: (res) => {
          getPhoneNumber(res.code, object);
        },
      });
    }
  };
  static navigateToMiniProgram(object) { return swan.navigateToMiniProgram(object) }
  static navigateBackMiniProgram(object) { return swan.navigateBackMiniProgram(object) }
  static getAccountInfoSync(object) { return swan.getAccountInfoSync(object) }

  static reportMonitor(object) { return swan.reportMonitor(object) }
  static reportAnalytics(object) { return swan.reportAnalytics(object) }
  static requestPayment(object) {
    var tradeNO = object.package.split("=")[1];
    console.log(tradeNO);
    var object2 = {
      tradeNO: tradeNO,
      success: object.success,
      fail: object.fail,
      complete: object.complete
    };
    return swan.tradePay(object2);
  };
  static authorize(object) { return swan.authorize(object) }
  static openSetting(object) { return swan.openSetting(object) }
  static getSetting(object) { return swan.getSetting(object) }
  static chooseAddress(object) { return swan.chooseAddress(object) }
  static openCard(object) {
    swan.openCardList();
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  };
  static addCard = function(object) {
    var url = getApp().onekit.server + "addcard";
    swan.httpRequest({
      url: url,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        cardList: JSON.stringify(object.cardList),
        js_code: object.jscode
      },
      success(res) {
        var data = res.data;
        if (object.success) {
          object.success(data);
        }
        if (object.complete) {
          object.complete(data);
        }
      }, fail(res) {
        console.log(res.data);
      }
    });
  }
  static chooseInvoiceTitle(object) { return swan.chooseInvoiceTitle(object) }
  static chooseInvoice(object) { return swan.chooseInvoice(object) }
  static startSoterAuthentication(object) { return swan.startSoterAuthentication(object) }
  static checkIsSupportSoterAuthentication(object) { return swan.checkIsSupportSoterAuthentication(object) }
  static checkIsSoterEnrolledInDevice(object) { return swan.checkIsSoterEnrolledInDevice(object) }
  static getWeRunData(object) { return swan.getWeRunData(object) }
  static reportMonitor(name, value) {
    var js_code = getApp().onekit.jscode;
    swan.httpRequest({
      url: "http://192.168.0.106:8080/onekit_adapter/reportMonitor",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        js_code: js_code,
        name: name,
        number: value
      },
      success: (res) => {
        console.log("success")
        console.log(res.data);
      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res) {
        console.log(res)
      }

    });
  };
  ////////// Router //////////////
  static navigateBack(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function(res) {
        if (object.success) {
          object["success"](result);
        }
        if (object.complete) {
          object["complete"](result);
        }
      }
      object2.fail = function(res) {
        if (object.fail) {
          object["success"](res);
        }
        if (object.complete) {
          object["complete"](res);
        }
      }
    }
    return swan.navigateBack(object2);
  }
  static switchTab(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function(res) {
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return swan.switchTab(object2);
  }
  static navigateTo(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function(res) {
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return swan.navigateTo(object2);
  }
  static reLaunch(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function(res) {
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return swan.reLaunch(object2);
  }
  static redirectTo(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function(res) {
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return swan.redirectTo(object2);
  }
  ///////////// Share /////////////
  static updateShareMenu(object) { return swan.updateShareMenu(object) }
  static showShareMenu(object) {
    swan.navigateTo({
      url: "/my/page/share/share"
    });
  };
  static hideShareMenu(object) { return swan.hideShareMenu(object) }
  static getShareInfo(object) { return swan.getShareInfo(object) }
  /////////////// Storage //////////////
  static getStorageInfoSync(object) { return swan.getStorageInfoSync(object) }
  static getStorageInfo(object) { return swan.getStorageInfo(object) }
  static clearStorageSync(object) { swan.clearStorageSync(object); return{};}
  static clearStorage(object) { return swan.clearStorage(object) }
  static removeStorageSync(object) {swan.removeStorageSync(object.key);return{}; }
  static removeStorage(object) { return swan.removeStorage(object) }
  static setStorageSync(object) { swan.setStorageSync(object.key,object.data); return {};}
  static setStorage(object) { return swan.setStorage(object) }
  static getStorageSync(object) {return {data: swan.getStorageSync(object.key)};}
  static getStorage(object) { return swan.getStorage(object) }
  ////////////// UI ////////////////
  static showActionSheet(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "items":
            object2["itemList"] = object[key];
            break; 
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function(res) {
        var result = { tapIndex: res.index };
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      }
    }
    return swan.showActionSheet(object2);
  }
  // static redirectTo(object) { return swan.redirectTo(object) }
  // static redirectTo(object) { return swan.redirectTo(object) }
  static hideLoading(object) { return swan.hideLoading(object) }
  static showLoading(object) {
    var object2;
    if (object) {
      if (!object.icon) {
        object.icon = "success";
      }
      //
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "content": 
            object2["title"] = object[key];
            break;
          case "type": 
            object2["icon"] = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return swan.showLoading(object2)
  }
  static SDKVersion(string) {return consloe.log("不支持此功能")}
  static hideToast(object) {return swan.hideToast(object)}
  static showToast(object) {
    var object2;
    if (object) {
      if (!object.icon) {
        object.icon = "success";
        object2 = {};
        for (var key in object) {
          switch (key) {
            case "content":
              object2["title"] = object[key];
              break;
            case "type":
              object2["icon"] = object[key];
              break;
            default:
              object2[key] = object[key];
              break;
          }
        }
      }
    }
    return swan.showToast(object2);
  }
  static confirm (object2) {
    if (object2 == null) {
      return swan.showModal();
    }
    if (object2.showCancel == null || object2.showCancel) {
      var object;
      object = {};
      for (var key in object2) {
        switch (key) {
          case "cancelButtonText": 
            object["cancelText"] = object2[key];
            break;
          case "confirmButtonText": 
            object["confirmText"] = object2[key];
            break;
          default:
            object[key] = object2[key];
            break;
        }
      }
      return swan.showModal(object);
    } else {
      var object;
      object = {};
      for (var key in object2) {
        switch (key) {
          default:
            object[key] = object2[key];
            break;
        }
      }
      return swan.showModal(object);
    }
  }
  static alert(object) {return swan.showModal(object);}
  static setNavigationBarColor(object) { return swan.setNavigationBarColor(object) }
  static hideNavigationBarLoading(object) {
    var object2 = {}
    for (key in object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    return swan.hideNavigationBarLoading(object2)
  }
  static showNavigationBarLoading(object) {
    var object2 = {}
    for (key in object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    return swan.showNavigationBarLoading(object2)
  }
  static setBackgroundTextStyle(object) { return swan.setBackgroundTextStyle(object) }

  static setBackgroundColor(object) { return swan.setBackgroundColor(object) }
  static setTabBarItem(object) { return swan.setTabBarItem(object) }
  static setTabBarStyle(object) { return swan.setTabBarStyle(object) }
  static hideTabBar(object) { return swan.hideTabBar(object) }
  static showTabBar(object) { return swan.showTabBar(object) }
  static hideTabBarRedDot(object) { return swan.hideTabBarRedDot(object) }
  static showTabBarRedDot(object) { return swan.showTabBarRedDot(object) }
  static removeTabBarBadge(object) { return swan.removeTabBarBadge(object) }
  static setTabBarBadge(object) { return swan.setTabBarBadge(object) }

  static loadFontFace(object) { return swan.loadFontFace(object) }

  static stopPullDownRefresh(object) {
    var object2 = {}
    if (object) {
      object2.success = function(res) {
        if (object.success) {
          object["success"](res);
        }
        if (object.complete) {
          object["complete"](res);
        }
      }
      object2.fail = function(res) {
        if (object.fail) {
          object["fail"](res);
        }
        if (object.complete) {
          object["complete"](res);
        }
      }
    }
    return swan.stopPullDownRefresh(object2)
  }
  static startPullDownRefresh(object) {
    var object2 = {}
    if (object) {
      object2.success = function(res) {
        if (object.success) {
          object["success"](res);
        }
        if (object.complete) {
          object["complete"](res);
        }
      }
      object2.fail = function(res) {
        if (object.fail) {
          object["fail"](res);
        }
        if (object.complete) {
          object["complete"](res);
        }
      }
    }
    return swan.startPullDownRefresh(object2)
  }
  static pageScrollTo(object) { return swan.pageScrollTo(object) }
  static setTopBarText(object) { return swan.setTopBarText(object) }
  static nextTick(object) { return swan.nextTick(object) }
  static getMenuButtonBoundingClientRect(object) { return swan.getMenuButtonBoundingClientRect(object) }
  static offWindowResize(object) { return swan.offWindowResize(object) }
  static onWindowResize(object) { return swan.onWindowResize(object) }
  ////////////// Worker ///////////////
  static createWorker(object) { return swan.createWorker(object) }
  ////////////// WXML ///////////////
  static createSelectorQuery(object) { return swan.createSelectorQuery(object) }
  static createIntersectionObserver(object) { return swan.createIntersectionObserver(object) }
  /////////////////////////////////////
  static hideKeyboard(object) { return swan.hideKeyboard(object) }
  ///////////// cloud ////////////////
  static get cloud() {
    return new wx_cloud();
  }
}