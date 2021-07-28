import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import Constants from "expo-constants";

const NumPad = ({
  width,
  rounded,
  roundedInput,
  editable,
  backgroundColor,
  btnColor,
  fontColor,
  showNumericIdentites,
}) => {
  const [display, setDisplay] = useState("0");
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        width: width,
        marginTop: Constants.statusBarHeight,
      }}
    >
      <View>
        <View
          style={{
            backgroundColor: "#e7e7e7",
            padding: 10,
            margin: 10,
            alignItems: "flex-end",
            borderRadius: roundedInput ? 8 : 0,
          }}
        >
          <TextInput placeholder="0" value={display} editable={editable} />
        </View>
        {showNumericIdentites && (
          <View
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: btnColor,
                padding: 10,
                margin: 10,
                width: "25%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: rounded ? 18 : 0,
              }}
              onPress={() =>
                setDisplay((previous) =>
                  previous.includes("%") ? previous : previous + "%"
                )
              }
            >
              <View>
                <Text style={{ color: fontColor }}>%</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: btnColor,
                padding: 10,
                margin: 10,
                width: "25%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 18,
              }}
              onPress={() =>
                setDisplay((previous) =>
                  previous.includes("$") ? previous : previous + "$"
                )
              }
            >
              <View>
                <Text style={{ color: fontColor }}>$</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: btnColor,
                padding: 10,
                margin: 10,
                width: "25%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 18,
              }}
              onPress={() =>
                setDisplay((previous) =>
                  previous.includes("€") ? previous : previous + "€"
                )
              }
            >
              <View>
                <Text style={{ color: fontColor }}>€</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: btnColor,
              padding: 10,
              margin: 10,
              width: "25%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: rounded ? 18 : 0,
            }}
            onPress={() =>
              setDisplay((previous) => (previous === "0" ? "7" : previous + 7))
            }
          >
            <View>
              <Text style={{ color: fontColor }}>7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: btnColor,
              padding: 10,
              margin: 10,
              width: "25%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
            }}
            onPress={() =>
              setDisplay((previous) => (previous === "0" ? "8" : previous + 8))
            }
          >
            <View>
              <Text style={{ color: fontColor }}>8</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: btnColor,
              padding: 10,
              margin: 10,
              width: "25%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
            }}
            onPress={() =>
              setDisplay((previous) => (previous === "0" ? "9" : previous + 9))
            }
          >
            <View>
              <Text style={{ color: fontColor }}>9</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: btnColor,
              padding: 10,
              margin: 10,
              width: "25%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
            }}
            onPress={() =>
              setDisplay((previous) => (previous === "0" ? "4" : previous + 4))
            }
          >
            <View>
              <Text style={{ color: fontColor }}>4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: btnColor,
              padding: 10,
              margin: 10,
              width: "25%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
            }}
            onPress={() =>
              setDisplay((previous) => (previous === "0" ? "5" : previous + 5))
            }
          >
            <View>
              <Text style={{ color: fontColor }}>5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: btnColor,
              padding: 10,
              margin: 10,
              width: "25%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
            }}
            onPress={() =>
              setDisplay((previous) => (previous === "0" ? "6" : previous + 6))
            }
          >
            <View>
              <Text style={{ color: fontColor }}>6</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: btnColor,
              padding: 10,
              margin: 10,
              width: "25%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
            }}
            onPress={() =>
              setDisplay((previous) => (previous === "0" ? "1" : previous + 1))
            }
          >
            <View>
              <Text style={{ color: fontColor }}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: btnColor,
              padding: 10,
              margin: 10,
              width: "25%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
            }}
            onPress={() =>
              setDisplay((previous) => (previous === "0" ? "2" : previous + 2))
            }
          >
            <View>
              <Text style={{ color: fontColor }}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: btnColor,
              padding: 10,
              margin: 10,
              width: "25%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
            }}
            onPress={() =>
              setDisplay((previous) => (previous === "0" ? "3" : previous + 3))
            }
          >
            <View>
              <Text style={{ color: fontColor }}>3</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: btnColor,
              padding: 10,
              margin: 10,
              width: "25%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
            }}
            onPress={() =>
              setDisplay((previous) => (previous === "0" ? "0" : previous + 0))
            }
          >
            <View>
              <Text style={{ color: fontColor }}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: btnColor,
              padding: 10,
              margin: 10,
              width: "25%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
            }}
            onPress={() =>
              setDisplay((previous) =>
                previous.includes(".") ? previous : previous + "."
              )
            }
          >
            <View>
              <Text style={{ color: fontColor }}>.</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: btnColor,
              padding: 10,
              margin: 10,
              width: "25%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
            }}
            onPress={() =>
              setDisplay((previous) =>
                previous.length === 1
                  ? "0"
                  : previous.substr(0, previous.length - 1)
              )
            }
            onLongPress={() => setDisplay("0")}
          >
            <View>
              <Text style={{ color: fontColor }}>{"<-"}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NumPad;
