import { writable } from 'svelte/store';

function filesHandler() {
	const { subscribe, set, update } = writable({filename: '', title: ''});

	return {
		subscribe,
		change: obj => set({
           filename: obj.filename,
           title: obj.title
        }),
		reset: () => set({filename, title})
	};
}

export const files = filesHandler();