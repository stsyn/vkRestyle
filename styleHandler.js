function initiate(data) {
	let getFirstPropertyName = object => {
		for (var i in object) {
			return i;
		}
	}

	let applySettings = () => {
		let acceptableTypes = ['boolean', 'string', 'list'];
		let container = document.getElementById('_style_settings_container');
		let groups = container.getElementsByClassName('_setting_group');
		let settings = {};
		Array.prototype.slice.call(groups).forEach(group => {
			let setting = {};
			let entries = group.getElementsByClassName('_setting');
			Array.prototype.slice.call(entries).forEach(entry => {
				if (!entry.dataset.type in acceptableTypes) return;
				let e = entry.getElementsByTagName('input')[0];
				if (entry.dataset.type == 'list') e = entry.getElementsByTagName('select')[0];
				let c = 'value';
				if (entry.dataset.type == 'boolean') c = 'checked';
				setting[entry.dataset.id] = e[c];
			});
			settings[group.dataset.id] = setting;
		});
		for (let id in settings) {
			localStorage['custom_style_'+id] = JSON.stringify(settings[id]);
		}
		location.reload();
	}

	let renderSettings = (template, data) => {
		let container = document.getElementById('_style_settings_container');
		if (!container) {
			document.body.appendChild(InfernoAddElem('div', {style:{background:'#fff', color:'#000', zIndex:'999999', padding:'1%', position:'absolute', height:'96%', overflowY:'auto', width:'98%'}}, [
				InfernoAddElem('div', {}, [
					InfernoAddElem('span', {innerHTML:'Очень beta настройки для пользовательских стилей, работающих под [напишу название этого заменителя userstyles.org сразу, как я его придумаю]. '}, []),
					InfernoAddElem('br', {}, []),
					InfernoAddElem('span', {innerHTML:'Стиль обновляется только после перезагрузки страницы, где он применен.'}, [])
				]),
				InfernoAddElem('hr', {}, []),
				container = InfernoAddElem('div', {id:'_style_settings_container'}, []),
				InfernoAddElem('hr', {}, []),
				InfernoAddElem('input', {type:'button', value:'Применить', events:[{t:'click',f:function(e) {applySettings()}}]}, [])
			]));
		}

		let elements = template.options.map(option => {
			if (option.type == 'boolean') return InfernoAddElem('div', {dataset:{id:option.id, type:option.type}, className:'_setting'}, [
				InfernoAddElem('label', {innerHTML:option.name}, [
					InfernoAddElem('input', {type:'checkbox', checked:data[option.id]}, [])
				])
			]);
			if (option.type == 'string') return InfernoAddElem('div', {dataset:{id:option.id, type:option.type}, className:'_setting'}, [
				InfernoAddElem('span', {innerHTML:option.name}, []),
				InfernoAddElem('input', {type:'text', value:data[option.id]}, [])
			]);
			if (option.type == 'list') {
				let list = [];
				for (let opt in option.options) {
					list.push(InfernoAddElem('option', {innerHTML:option.options[opt].name, value:opt, selected:opt===data[option.id]}, []));
				}
				return InfernoAddElem('div', {dataset:{id:option.id, type:option.type}, className:'_setting'}, [
					InfernoAddElem('span', {innerHTML:option.name}, []),
					InfernoAddElem('select', {size:1, style:{marginLeft:'.5em'}}, list)
				]);
			}
			return InfernoAddElem('div', {dataset:{id:option.id, type:option.type}}, []);
		});

		container.appendChild(
			InfernoAddElem('div', {dataset:{id:template.id}, className:'_setting_group'}, [
				InfernoAddElem('h3', {innerHTML:template.name, style:{color:'#000'}}, []),
				InfernoAddElem('div', {style:{userSelect:'none'}}, elements)
			])
		);
	}

	let applyStyle = (template, data) => {
		let style = template.root;
		let modifyStyle = (acts) => {
			for (let place in acts) {
				if (place == '__append') style += '\n' + acts[place];
				else style = style.replace(new RegExp(place.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'g'), acts[place]);
			}
		};
		template.options.forEach(option => {
			if (option.type == 'boolean') {
				let prefered = data[option.id] || false;
				if (prefered) modifyStyle(option.actions);
			}
			else if (option.type == 'list') {
				let prefered = data[option.id] || getFirstPropertyName(option.options);
				if (prefered) modifyStyle(option.options[prefered].actions);
			}
			else if (option.type == 'string') {
				let prefered = data[option.id] || '';
				modifyStyle({[option.target]:prefered});
			}
		});
		document.getElementsByTagName('html')[0].appendChild(InfernoAddElem('style', {innerHTML:style}, []));
	}

	let loadSaved = id => {
		if (localStorage['custom_style_'+id]) {
			try {
				return JSON.parse(localStorage['custom_style_'+id]);
			}
			catch (e) {
			}
		}
		return {};
	}

	document.addEventListener('DOMContentLoaded', () => {
		if (location.pathname == '/s') {
			setTimeout(() => renderSettings(data, loadSaved(data.id)), 100);
		}
	});
  if (document.readyState !== 'loading') {
    if (location.pathname == '/s') {
			setTimeout(() => renderSettings(data, loadSaved(data.id)), 100);
		}
  }
	applyStyle(data, loadSaved(data.id));
}
