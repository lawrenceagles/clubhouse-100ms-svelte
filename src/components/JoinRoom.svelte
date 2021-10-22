<script>
    import { HMSReactiveStore } from '@100mslive/hms-video-store';

    let isLoading = false;
    let userName = "";
    let role = "";

    const hms = new HMSReactiveStore();
    const hmsStore = hms.getStore();
    const hmsActions = hms.getHMSActions();

    const roles = [
            { label: 'Speaker', value: 'speaker' },
            { label: 'Listener', value: 'listener' },
            { label: 'Moderator', value: 'moderator' }
        ];

    const handleSubmit = async () => {
		if (!userName) return; // makes sure user enters a username

		isLoading = true;
		try {
			const authToken = await getToken(role);
			hmsActions.join({
				userName,
				authToken,
				settings: {
					isAudioMuted: true
				}
			});
		} catch (error) {
			isLoading = false
			console.log('Token API Error', error);
		}
	};
</script>

<section>
    Hello
</section>

<style></style>