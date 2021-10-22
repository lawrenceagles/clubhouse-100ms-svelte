<script>
    import { HMSReactiveStore, selectPeers } from '@100mslive/hms-video-store';
    import Footer from "./Footer.svelte";

    const hms = new HMSReactiveStore();
    const hmsStore = hms.getStore();

    const peers = hmsStore.getState(selectPeers);
</script>

<section class="bg-gray-200 relative min-h-screen antialiased border-t-8 border-black">
    <div class="max-w-sm mx-auto px-6">
        <div class="relative h-screen flex flex-wrap items-center">
            <div class="text-center font-semibold text-black text-2xl"> Welcome to the Room </div>
            <div class="w-full">
                <div class="capitalize font-bold">
                    {#each peers as peer}
                        <div>
                            {peer.name} - {peer.roleName} {peer.isLocal ? '(You)' : ''}
                        </div>
                    {/each}
                </div>
            </div>
            <Footer />
        </div>
    </div>
</section>

<style></style>