import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineSetting, AiOutlineClose, AiFillLock } from 'react-icons/ai';

import { useSettings, TRAIL_COLORS } from '../../context/SettingsContext';
import {
  FabButton,
  Overlay,
  Panel,
  PanelHeader,
  PanelTitle,
  CloseButton,
  SettingGroup,
  SettingRow,
  SettingLabelGroup,
  SettingLabel,
  SettingDescription,
  ToggleTrack,
  ToggleThumb,
  ColorSwatchRow,
  ColorSwatch,
  SliderGroup,
  SliderRow,
  SliderLabelRow,
  SliderLabel,
  SliderValue,
  SliderInput,
  LockedWrap,
  Tooltip,
  ResetButton,
} from './SettingsStyles';

const Toggle = ({ checked, onChange, disabled, ariaLabel }) => (
  <ToggleTrack checked={checked} disabled={disabled} aria-label={ariaLabel} aria-pressed={checked} onClick={() => !disabled && onChange(!checked)}>
    <ToggleThumb checked={checked} />
  </ToggleTrack>
);

const Settings = () => {
  const { settings, updateSettings, resetSettings } = useSettings();
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const fabRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const handleClickOutside = (event) => {
      if (
        panelRef.current && !panelRef.current.contains(event.target) &&
        fabRef.current && !fabRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  return (
    <>
      <Overlay open={open} />
      <FabButton ref={fabRef} onClick={() => setOpen((prev) => !prev)} aria-label="Open settings" aria-expanded={open}>
        <AiOutlineSetting size="1.6rem" />
      </FabButton>

      <Panel ref={panelRef} open={open} role="dialog" aria-label="Site settings" aria-hidden={!open}>
        <PanelHeader>
          <PanelTitle>Settings</PanelTitle>
          <CloseButton onClick={() => setOpen(false)} aria-label="Close settings">
            <AiOutlineClose size="1.4rem" />
          </CloseButton>
        </PanelHeader>

        <SettingGroup>
          <SettingRow>
            <SettingLabelGroup>
              <SettingLabel>Mouse Trail</SettingLabel>
              <SettingDescription>Show a spark trail instead of the cursor</SettingDescription>
            </SettingLabelGroup>
            <Toggle
              checked={settings.trailEnabled}
              onChange={(value) => updateSettings({ trailEnabled: value })}
              ariaLabel="Toggle mouse trail"
            />
          </SettingRow>

          {settings.trailEnabled && (
            <>
              <ColorSwatchRow>
                {TRAIL_COLORS.map((color) => (
                  <ColorSwatch
                    key={color.id}
                    color={color.value}
                    selected={settings.trailColor === color.value}
                    onClick={() => updateSettings({ trailColor: color.value })}
                    aria-label={`Set trail color to ${color.label}`}
                    title={color.label}
                  />
                ))}
              </ColorSwatchRow>

              <SliderGroup>
                <SliderRow>
                  <SliderLabelRow>
                    <SliderLabel>Size</SliderLabel>
                    <SliderValue>{settings.trailSize}px</SliderValue>
                  </SliderLabelRow>
                  <SliderInput
                    min={4}
                    max={20}
                    step={1}
                    value={settings.trailSize}
                    onChange={(e) => updateSettings({ trailSize: Number(e.target.value) })}
                    aria-label="Trail spark size"
                  />
                </SliderRow>

                <SliderRow>
                  <SliderLabelRow>
                    <SliderLabel>Length</SliderLabel>
                    <SliderValue>{(settings.trailLength / 1000).toFixed(1)}s</SliderValue>
                  </SliderLabelRow>
                  <SliderInput
                    min={400}
                    max={3000}
                    step={100}
                    value={settings.trailLength}
                    onChange={(e) => updateSettings({ trailLength: Number(e.target.value) })}
                    aria-label="Trail length"
                  />
                </SliderRow>

                <SliderRow>
                  <SliderLabelRow>
                    <SliderLabel>Density</SliderLabel>
                    <SliderValue>{settings.trailDensity}/10</SliderValue>
                  </SliderLabelRow>
                  <SliderInput
                    min={1}
                    max={10}
                    step={1}
                    value={settings.trailDensity}
                    onChange={(e) => updateSettings({ trailDensity: Number(e.target.value) })}
                    aria-label="Trail density"
                  />
                </SliderRow>
              </SliderGroup>
            </>
          )}
        </SettingGroup>

        <SettingGroup>
          <SettingRow>
            <SettingLabelGroup>
              <SettingLabel>Landing Animation</SettingLabel>
              <SettingDescription>Play the intro burst animation on load</SettingDescription>
            </SettingLabelGroup>
            <Toggle
              checked={settings.introAnimationEnabled}
              onChange={(value) => updateSettings({ introAnimationEnabled: value })}
              ariaLabel="Toggle landing animation"
            />
          </SettingRow>
        </SettingGroup>

        <SettingGroup>
          <SettingRow>
            <SettingLabelGroup>
              <SettingLabel>Background Motion</SettingLabel>
              <SettingDescription>Floating line animation behind the hero</SettingDescription>
            </SettingLabelGroup>
            <Toggle
              checked={settings.backgroundMotionEnabled}
              onChange={(value) => updateSettings({ backgroundMotionEnabled: value })}
              ariaLabel="Toggle background motion"
            />
          </SettingRow>
        </SettingGroup>

        <SettingGroup>
          <SettingRow>
            <SettingLabelGroup>
              <SettingLabel>
                Light Mode <AiFillLock size="1.1rem" style={{ opacity: 0.6 }} />
              </SettingLabel>
              <SettingDescription>Switch the site to a light theme</SettingDescription>
            </SettingLabelGroup>
            <LockedWrap tabIndex={0}>
              <ToggleTrack checked={false} disabled aria-label="Light mode (coming soon)">
                <ToggleThumb checked={false} />
              </ToggleTrack>
              <Tooltip data-tooltip>Coming soon</Tooltip>
            </LockedWrap>
          </SettingRow>
        </SettingGroup>

        <ResetButton onClick={resetSettings}>Reset to Defaults</ResetButton>
      </Panel>
    </>
  );
};

export default Settings;
