import "@/styles/talent.css";
import { useTweaks } from "@/hooks/useTweaks";
import {
  TweaksPanel,
  TweakSection,
  TweakColor,
  TweakSelect,
  TweakRadio,
  TweakToggle,
} from "@/components/TweaksPanel";
import CompaniesLogos from "@/pages/Companies/CompaniesLogos";
import TalentHero from "./TalentHero";
import WhatWeOffer from "./WhatWeOffer";
import TalentProcess from "./TalentProcess";
import TalentFAQ from "./TalentFAQ";
import ApplyForm from "./ApplyForm";
import MapBanner from "./MapBanner";

const TALENT_DEFAULTS = {
  accent: "#337BFF",
  headingFont: "Oswald",
  mode: "warm",
  density: "regular",
  showMap: true,
};

const FONT_MAP = {
  Oswald: "'Oswald', sans-serif",
  "Bebas Neue": "'Bebas Neue', sans-serif",
  Anton: "'Anton', sans-serif",
  "Roboto Condensed": "'Roboto Condensed', sans-serif",
};

export default function Talent() {
  const [tweaks, setTweak] = useTweaks(TALENT_DEFAULTS);
  const cssVars = { "--accent": tweaks.accent };
  if (FONT_MAP[tweaks.headingFont]) cssVars["--font-display"] = FONT_MAP[tweaks.headingFont];

  const bodyClass = `talent-page ${tweaks.mode === "cool" ? "mode-cool" : "mode-warm"} density-${tweaks.density}`;

  return (
    <div className={bodyClass} style={cssVars}>
      <TalentHero />
      <CompaniesLogos />
      {tweaks.showMap && <MapBanner />}
      <WhatWeOffer />
      <TalentProcess />
      <TalentFAQ />
      <ApplyForm />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Accent">
          <TweakColor
            label="Accent color"
            value={tweaks.accent}
            onChange={(v) => setTweak("accent", v)}
          />
        </TweakSection>
        <TweakSection label="Type">
          <TweakSelect
            label="Display font"
            value={tweaks.headingFont}
            options={["Oswald", "Bebas Neue", "Anton", "Roboto Condensed"]}
            onChange={(v) => setTweak("headingFont", v)}
          />
        </TweakSection>
        <TweakSection label="Mood">
          <TweakRadio
            label="Page mood"
            value={tweaks.mode}
            options={["warm", "cool"]}
            onChange={(v) => setTweak("mode", v)}
          />
          <TweakRadio
            label="Density"
            value={tweaks.density}
            options={["tight", "regular", "comfy"]}
            onChange={(v) => setTweak("density", v)}
          />
          <TweakToggle
            label="Show map banner"
            value={tweaks.showMap}
            onChange={(v) => setTweak("showMap", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}
