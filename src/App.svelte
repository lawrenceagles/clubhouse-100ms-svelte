<script>
	 import { HMSReactiveStore, selectIsConnectedToRoom } from '@100mslive/hms-video-store';
	 import JoinRoom from './components/JoinRoom.svelte';
	 import Room from './components/Room.svelte';

	let isConnected = false;
	const hms = new HMSReactiveStore();
	const hmsStore = hms.getStore();
	hmsStore.subscribe(onConnection, selectIsConnectedToRoom);


	function onConnection(connectedToRoom) {
		if(connectedToRoom) {
			isConnected = true;
		}else {
			isConnected = false;
		}
	}


</script>

<main>
	{#if isConnected }
		<Room />
	{:else}
		<JoinRoom />
	{/if}
</main>

<style>

</style>