"use client";
import {
   VisibilityOffOutlined,
   VisibilityOutlined,
} from "@mui/icons-material";
import {
   Box,
   IconButton,
   InputLabel,
   TextField,
} from "@mui/material";
import { memo, useState } from "react";
import { Controller } from "react-hook-form";

export const CustomInput = memo(
   ({
      name,
      control,
      type,
      errors,
      placeholder = null,
      label = "",
      title = "",
      disabled = false,
      hidden = false,
      required,
      min,
      max,
      rows,
      startIcon,
      endIcon,
      defaultValue,
      isNegative,
      bgRed,
   }) => {
      const [show, setShow] = useState(false);
      let error;
      const splitName = name?.split(".");
      if (errors) {
         if (splitName?.length > 1) {
            let loopError = errors;
            splitName?.map((item, index) => {
               loopError = loopError?.[item];
            });
            error = loopError?.message;
         } else {
            error = errors?.[name]?.message;
         }
      }

      console.log({ aaaaa: error });

      const getValue = (e) => {
         if (type === "number") {
            if (min && e.target.value < min) {
               return min;
            } else if (max && e.target.value > max) {
               return max;
            } else {
               return e.target.value;
            }
         }
      };

      return (
         <div className="inputs">
            <div>
               {title && (
                  <Box
                     display="flex"
                     gridColumnGap={".1rem"}
                     justifyContent={"space-between"}
                     alignItems={"center"}
                  >
                     {" "}
                     <InputLabel className="inputTitle">
                        {title}{" "}
                        <span style={{ color: "red" }}>
                           {required && "*"}{" "}
                        </span>
                     </InputLabel>
                  </Box>
               )}
               <Controller
                  name={name}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                     <>
                        <TextField
                           sx={
                              ({
                                 "& .MuiOutlinedInput-notchedOutline":
                                    {
                                       border: "none !important",
                                    },
                              },
                              {
                                 "& .MuiOutlinedInput-root": {
                                    backgroundColor:
                                       "#fff !important",
                                 },
                              },
                              {
                                 "& .MuiOutlinedInput": {
                                    border:
                                       "1px solid red !important",
                                    backgroundColor:
                                       "#fff !important",
                                 },
                              },
                              {
                                 "& .MuiInputBase-root": {
                                    backgroundColor:
                                       "#fff !important",
                                    border: "none !important",
                                 },
                              },
                              {
                                 "& .MuiInputBase-root": {
                                    backgroundColor:
                                       "#fff !important",
                                    borderRadius: "50px",
                                    border: "none !important",
                                 },
                              },
                              {
                                 "& .MuiInputBase-input": {
                                    backgroundColor:
                                       "#fff !important",
                                    padding: "16px !important",
                                    fontSize: "12px",
                                    fontFamily: "Outfit !important",
                                 },
                              })
                           }
                           type={show ? "text" : type}
                           onChange={(event) => {
                              const newValue =
                                 type === "number" &&
                                 event.target.value > max
                                    ? max
                                    : event.target.value;
                              onChange(newValue);
                           }}
                           value={value || ""}
                           fullWidth
                           placeholder={placeholder}
                           label={label}
                           variant="outlined"
                           defaultValue={defaultValue || ""}
                           title={title}
                           disabled={disabled}
                           onWheel={(e) => e.target.blur()}
                           InputProps={{
                              inputProps: {
                                 min: !isNegative && (min || 0),
                                 max: max,
                                 step: "0.01",
                              },
                              startAdornment: startIcon,
                              endAdornment:
                                 type === "password" ? (
                                    <IconButton
                                       onClick={() =>
                                          setShow((prev) => !prev)
                                       }
                                       sx={{
                                          "& svg": {
                                             margin: "0 !important",
                                             height: "14px",
                                             width: "14px",
                                          },
                                       }}
                                    >
                                       {show ? (
                                          <VisibilityOffOutlined />
                                       ) : (
                                          <VisibilityOutlined />
                                       )}
                                    </IconButton>
                                 ) : (
                                    endIcon
                                 ),
                           }}
                           hidden={hidden}
                           multiline={rows}
                           rows={rows}
                        />
                        {error && (
                           <Box
                              style={
                                 bgRed
                                    ? {
                                         color: "red",
                                         fontSize: "10px",
                                      }
                                    : {
                                         color: "red",
                                         fontSize: "10px",
                                      }
                              }
                           >
                              {type === "password"
                                 ? error
                                 : !value && error}
                           </Box>
                        )}
                     </>
                  )}
               />
            </div>
         </div>
      );
   }
);

// Set the display name
CustomInput.displayName = "CustomInput";
