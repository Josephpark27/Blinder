import React from 'react';
import ParticipantInfo from '../ParticipantInfo/ParticipantInfo';
import ParticipantTracks from '../ParticipantTracks/ParticipantTracks';
import { LocalParticipant, RemoteParticipant } from 'twilio-video';

interface ParticipantProps {
  participant: LocalParticipant | RemoteParticipant;
  disableAudio?: boolean;
  enableScreenShare?: boolean;
  onClick: () => void;
  isSelected: boolean;
}

export default function Participant({
  participant,
  disableAudio,
  enableScreenShare,
  onClick,
  isSelected,
}: ParticipantProps) {
  return (
    //<ParticipantInfo participant={participant} onClick={onClick} isSelected={isSelected}>
      <ParticipantTracks participant={participant} disableAudio={disableAudio}  />
    //</ParticipantInfo>
  );
}
