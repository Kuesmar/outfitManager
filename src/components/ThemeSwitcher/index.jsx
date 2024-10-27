import React from "react";
import {useTheme} from "next-themes";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (event) => {
    if(event.target.checked){
        return setTheme('light')
    }
    return setTheme('dark')
  }

  return (
    <Switch
        size="lg"
        color="primary"
        data-testid="theme-switcher-id"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onChange={handleChange}
    >
    </Switch>
  )
};