<script>
    import { HMSReactiveStore, selectIsConnectedToRoom, selectIsLocalAudioEnabled } from '@100mslive/hms-video-store';

    const mute = ture;
    const hms = new HMSReactiveStore();
    const hmsStore = hms.getStore();
    const hmsActions = hms.getHMSActions();

    const isConnected = hmsStore(selectIsConnectedToRoom);
    const audioEnabled = hmsStore(selectIsLocalAudioEnabled);

    const leaveRoom = () => {
		if (isConnected) {
			hmsActions.leave();
		}
	};

	const toggleAudio = () => {
		setMute(!mute);
		hmsActions.setLocalAudioEnabled(!audioEnabled);
	};

</script>

<main>
    <button
        class={`rounded-full h-20 w-20 flex items-center justify-center mt-3 text-lg font-semibold  text-white rounded-lg block shadow-xl hover:text-white ${mute
            ? 'bg-green-700'  
            : 'bg-red-700'} `}
        onClick={toggleAudio}
    > 
        {audioEnabled ? 'Mute' : 'Unmute'}
    </button>

    <button
        class={` mt-3 text-white rounded-lg px-6 py-2 block shadow-xl hover:text-white bg-red-700 hover:bg-red-900`}
        onClick={leaveRoom}
    >
        Leave Room
    </button>
</main>

<style></style>