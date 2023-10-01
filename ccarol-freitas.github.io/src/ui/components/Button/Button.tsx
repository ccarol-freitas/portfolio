import { Button, Text } from "./styles";
import DownloadIcon from "../../../images/download.svg";

const Download = () => {
  const handleDownloadClick = () => {
    window.open("https://drive.google.com/file/d/1HhV_tFZpUzvLFnAYv9wwsxPIKtcZ_K4S/view?usp=drive_link", "_blank");
  };

  return (
    <Button onClick={handleDownloadClick}>
      <img src={DownloadIcon} alt="" />
      <Text>Baixar CV</Text>
    </Button>
  );
};

export default Download;
