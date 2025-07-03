// js
// react
import { useEffect } from "react";
// third
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
// own
import "./App.css";
import { useStore } from "./hooks/useStore";
import { AUTO_LANGUAGE, VOICE_FOR_LANGUAGE } from "./constants/constants";
import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from "./components/Icons";
import LanguageSelector from "./components/LanguageSelector";
import { SectionType } from "./interfaces/types.d";
import TextArea from "./components/TextArea";
import { translate } from "./services/translate";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    toText,
    loading,
    setInterchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setToText,
  } = useStore();

  const debounceFromText = useDebounce(fromText);

  useEffect(() => {
    if (debounceFromText === '') return;
    console.log('[useEffect] fromText:', debounceFromText);
    translate({fromLanguage, toLanguage, fromText: debounceFromText})
      .then((result) => {
        if (result === null) return;
        setToText(result);
      })
      .catch(() => setToText('Error'));
  }, [fromLanguage, toLanguage, debounceFromText]);

  const handleClipboardFromText = () => {
    navigator.clipboard.writeText(fromText);
  }

  const handleSpeakFromText = () => {
    const utterance = new SpeechSynthesisUtterance(fromText);
    utterance.lang = VOICE_FOR_LANGUAGE[fromLanguage];
    speechSynthesis.speak(utterance);
  }

  const handleClipboardToText = () => {
    navigator.clipboard.writeText(toText);
  }

  const handleSpeakToText = () => {
    const utterance = new SpeechSynthesisUtterance(toText);
    utterance.lang = VOICE_FOR_LANGUAGE[toLanguage];
    speechSynthesis.speak(utterance);
  }

  return (
    <Container fluid>
      <h1 style={{
        textAlign: 'center'
      }}>Clone Google Translate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.from}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <div style={{position: 'relative'}}>
              <TextArea
                type={SectionType.from}
                value={fromText}
                onChange={setFromText}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  display: 'flex'
                }}
              >
                <Button
                  variant="link"
                  onClick={handleClipboardFromText}
                >
                  <ClipboardIcon />
                </Button>
                <Button
                  variant="link"
                  onClick={handleSpeakFromText}
                >
                  <SpeakerIcon />
                </Button>
              </div>
            </div>
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button
            variant="link"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={setInterchangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.to}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <div style={{position: 'relative'}}>
              <TextArea
                loading={loading}
                type={SectionType.to}
                value={toText}
                onChange={setToText}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  display: 'flex'
                }}
              >
                <Button
                  variant="link"
                  onClick={handleClipboardToText}
                >
                  <ClipboardIcon />
                </Button>
                <Button
                  variant="link"
                  onClick={handleSpeakToText}
                >
                  <SpeakerIcon />
                </Button>
              </div>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
