import "./styles/companies.css";
import { useTweaks } from "@/hooks/useTweaks";
import {
  TweaksPanel,
  TweakSection,
  TweakColor,
  TweakSelect,
  TweakRadio,
} from "@/components/TweaksPanel";
import CompaniesLogos from "@/components/CompaniesLogos";
import CompaniesHero from "./components/CompaniesHero";
import CaseStudies from "./components/CaseStudies";
import HowItWorks from "./components/HowItWorks";
import Models from "./components/Models";
import CompaniesContact from "./components/CompaniesContact";

const COMPANIES_DEFAULTS = {
  accent: "#337BFF",
  headingFont: "Roboto",
  displayFont: "Oswald",
  density: "regular",
  showMap: true,
};

const FONT_MAP = {
  Roboto: "'Roboto', system-ui, sans-serif",
  "Roboto Condensed": "'Roboto Condensed', system-ui, sans-serif",
};

const DISPLAY_MAP = {
  Oswald: "'Oswald', sans-serif",
  "Bebas Neue": "'Bebas Neue', sans-serif",
  Anton: "'Anton', sans-serif",
};

export default function Companies() {
  const [tweaks, setTweak] = useTweaks(COMPANIES_DEFAULTS);
  const cssVars = { "--accent": tweaks.accent };
  if (FONT_MAP[tweaks.headingFont]) cssVars["--font-sans"] = FONT_MAP[tweaks.headingFont];
  if (DISPLAY_MAP[tweaks.displayFont]) cssVars["--font-display"] = DISPLAY_MAP[tweaks.displayFont];

  return (
    <div className={`companies-page density-${tweaks.density}`} style={cssVars}>
      <CompaniesHero />
      <CompaniesLogos />
      <CaseStudies />
      <HowItWorks />
      <Models />
      <CompaniesContact />

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
            label="Body font"
            value={tweaks.headingFont}
            options={["Roboto", "Roboto Condensed"]}
            onChange={(v) => setTweak("headingFont", v)}
          />
          <TweakSelect
            label="Display font"
            value={tweaks.displayFont}
            options={["Oswald", "Bebas Neue", "Anton"]}
            onChange={(v) => setTweak("displayFont", v)}
          />
        </TweakSection>
        <TweakSection label="Layout">
          <TweakRadio
            label="Density"
            value={tweaks.density}
            options={["tight", "regular", "comfy"]}
            onChange={(v) => setTweak("density", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}
