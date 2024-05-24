function _0x1791(_0x340377, _0x528266) {
  const _0x2b7a75 = _0x2b7a();
  return (
    (_0x1791 = function (_0x1791c0, _0x1acc54) {
      _0x1791c0 = _0x1791c0 - 0x12e;
      let _0x49606c = _0x2b7a75[_0x1791c0];
      return _0x49606c;
    }),
    _0x1791(_0x340377, _0x528266)
  );
}
const _0x146a73 = _0x1791;
(function (_0x7cb8e4, _0x2c9f3a) {
  const _0xd9e16e = _0x1791,
    _0x35a04d = _0x7cb8e4();
  while (!![]) {
    try {
      const _0x568183 =
        (parseInt(_0xd9e16e(0x152)) / 0x1) *
          (parseInt(_0xd9e16e(0x13b)) / 0x2) +
        (-parseInt(_0xd9e16e(0x133)) / 0x3) *
          (parseInt(_0xd9e16e(0x146)) / 0x4) +
        parseInt(_0xd9e16e(0x142)) / 0x5 +
        parseInt(_0xd9e16e(0x12e)) / 0x6 +
        (parseInt(_0xd9e16e(0x141)) / 0x7) *
          (parseInt(_0xd9e16e(0x154)) / 0x8) +
        -parseInt(_0xd9e16e(0x162)) / 0x9 +
        -parseInt(_0xd9e16e(0x15d)) / 0xa;
      if (_0x568183 === _0x2c9f3a) break;
      else _0x35a04d["push"](_0x35a04d["shift"]());
    } catch (_0x494b6c) {
      _0x35a04d["push"](_0x35a04d["shift"]());
    }
  }
})(_0x2b7a, 0x7dc10);
const container = document[_0x146a73(0x14a)](_0x146a73(0x139)),
  search = document[_0x146a73(0x14a)](_0x146a73(0x130)),
  weatherBox = document[_0x146a73(0x14a)](_0x146a73(0x15b)),
  weatherDetails = document[_0x146a73(0x14a)](".weather-details"),
  error404 = document[_0x146a73(0x14a)](_0x146a73(0x158)),
  cityHide = document[_0x146a73(0x14a)](_0x146a73(0x136));
document[_0x146a73(0x144)](
  _0x146a73(0x135),
  function (_0x3d9f8b) {
    const _0x50bbae = _0x146a73;
    _0x3d9f8b[_0x50bbae(0x166)]();
  },
  ![]
),
  search["addEventListener"](_0x146a73(0x148), () => {
    const _0x479494 = _0x146a73,
      _0x15114e = _0x479494(0x131),
      _0x2d9ca2 = document[_0x479494(0x14a)](".search-box\x20input")["value"];
    if (_0x2d9ca2 == "") return;
    fetch(_0x479494(0x132) + _0x2d9ca2 + "&units=metric&appid=" + _0x15114e)
      [_0x479494(0x167)]((_0x59ab64) => _0x59ab64[_0x479494(0x137)]())
      [_0x479494(0x167)]((_0x11309c) => {
        const _0x21277f = _0x479494;
        if (_0x11309c[_0x21277f(0x14b)] == "404") {
          (cityHide["textContent"] = _0x2d9ca2),
            (container["style"][_0x21277f(0x140)] = _0x21277f(0x161)),
            weatherBox["classList"]["remove"]("active"),
            weatherDetails["classList"]["remove"](_0x21277f(0x147)),
            error404["classList"][_0x21277f(0x15e)](_0x21277f(0x147));
          return;
        }
        const _0x19f592 = document["querySelector"](_0x21277f(0x138)),
          _0x8204fc = document[_0x21277f(0x14a)](_0x21277f(0x13c)),
          _0x25eef6 = document[_0x21277f(0x14a)](_0x21277f(0x145)),
          _0xdd5e49 = document[_0x21277f(0x14a)](_0x21277f(0x163)),
          _0x44c09a = document[_0x21277f(0x14a)](_0x21277f(0x134));
        if (cityHide["textContent"] == _0x2d9ca2) return;
        else {
          (cityHide[_0x21277f(0x15f)] = _0x2d9ca2),
            (container[_0x21277f(0x155)][_0x21277f(0x140)] = _0x21277f(0x151)),
            container[_0x21277f(0x149)][_0x21277f(0x15e)]("active"),
            weatherBox["classList"]["add"]("active"),
            weatherDetails[_0x21277f(0x149)][_0x21277f(0x15e)](
              _0x21277f(0x147)
            ),
            error404["classList"][_0x21277f(0x165)](_0x21277f(0x147));
          switch (_0x11309c["weather"][0x0][_0x21277f(0x14c)]) {
            case _0x21277f(0x12f):
              _0x19f592["src"] = _0x21277f(0x14e);
              break;
            case _0x21277f(0x13e):
              _0x19f592[_0x21277f(0x143)] = _0x21277f(0x150);
              break;
            case _0x21277f(0x159):
              _0x19f592[_0x21277f(0x143)] = "images/snow.png";
              break;
            case "Clouds":
              _0x19f592[_0x21277f(0x143)] = _0x21277f(0x153);
              break;
            case _0x21277f(0x14f):
              _0x19f592["src"] = _0x21277f(0x157);
              break;
            case _0x21277f(0x160):
              _0x19f592[_0x21277f(0x143)] = "images/mist.png";
              break;
            default:
              _0x19f592[_0x21277f(0x143)] = _0x21277f(0x153);
          }
          (_0x8204fc[_0x21277f(0x13d)] =
            parseInt(_0x11309c[_0x21277f(0x14c)][_0x21277f(0x14d)]) +
            _0x21277f(0x164)),
            (_0x25eef6[_0x21277f(0x13d)] =
              "" + _0x11309c[_0x21277f(0x13a)][0x0]["description"]),
            (_0xdd5e49[_0x21277f(0x13d)] =
              _0x11309c["main"][_0x21277f(0x13f)] + "%"),
            (_0x44c09a[_0x21277f(0x13d)] =
              parseInt(_0x11309c[_0x21277f(0x15c)][_0x21277f(0x15a)]) +
              _0x21277f(0x156));
        }
      });
  });
function _0x2b7a() {
  const _0x5bf2ac = [
    ".weather-details\x20.humidity\x20span",
    "<span>°C</span>",
    "remove",
    "preventDefault",
    "then",
    "2768754DDIPEZ",
    "Clear",
    ".search-box\x20button",
    "e925894234b1619e883f540516e7a44c",
    "https://api.openweathermap.org/data/2.5/weather?q=",
    "477KnOAAi",
    ".weather-details\x20.wind\x20span",
    "contextmenu",
    ".city-hide",
    "json",
    ".weather-box\x20img",
    ".container",
    "weather",
    "2hQPYGT",
    ".weather-box\x20.temperature",
    "innerHTML",
    "Rain",
    "humidity",
    "height",
    "7yKDNCI",
    "1709355gACjUE",
    "src",
    "addEventListener",
    ".weather-box\x20.description",
    "12004xXtGGu",
    "active",
    "click",
    "classList",
    "querySelector",
    "cod",
    "main",
    "temp",
    "images/clear.png",
    "Mist",
    "images/rain.png",
    "555px",
    "300987fnZCGP",
    "images/cloud.png",
    "1429616bptfLA",
    "style",
    "Km/h",
    "images/mist.png",
    ".not-found",
    "Snow",
    "speed",
    ".weather-box",
    "wind",
    "2456870VcMvtt",
    "add",
    "textContent",
    "Haze",
    "400px",
    "405765HixWVu",
  ];
  _0x2b7a = function () {
    return _0x5bf2ac;
  };
  return _0x2b7a();
}
