function handle_browse_click_male()
{
	var fileinput = document.getElementById("upload_male_id");
	fileinput.click();
}

function handle_change()
{
	var fileinput = document.getElementById("upload_male_id");
	var textinput = document.getElementById("filename");
	textinput.value = fileinput.value;
}

function handle_browse_click_female()
{
	var fileinput = document.getElementById("upload_female_id");
	fileinput.click();
}

function handle_change()
{
	var fileinput = document.getElementById("upload_female_id");
	var textinput = document.getElementById("filename");
	textinput.value = fileinput.value;
}

function replace_dict(dict)
{
	var tmp = {"a": 1, "b" :2};
	dict = tmp;
}

function remove_uncommon_genes(mommy, daddy, db_genes)
{
	var new_mommy = {};
	var new_daddy = {};
	var new_db_genes = {};

	for (let key in db_genes)
	{
		if ((key in mommy) && (key in daddy))
		{
			new_mommy[key] = mommy[key];
			new_daddy[key] = daddy[key];
			new_db_genes[key] = db_genes[key];
		}
	}
	return [new_mommy, new_daddy, new_db_genes];
}

function dict_to_list(dict)
{
	const old_list = [];
	for (let key in dict) {
		old_list.push(key);
		old_list.push(mommy[key]);
	}
	return old_list;
}

function dict_of_dict_to_list(dict)
{
	const list = [];

	for (gene_key in dict)
	{
		list.push(gene_key);
		for (allele in dict[gene_key])
		{
			list.push("  ");
			list.push(allele);
			list.push(dict[gene_key][allele]);
		}
		list.push("   ");
	}
	return list;
}

function same_allele(a, b)
{
	return (a == b) || (a[1]+a[0] == b);
}

function normalize_allele(allele)
{
	switch (allele)
	{
		case "TA":
			allele = "AT";
			break;
		case "TC":
			allele = "CT";
			break;
		case "GA":
			allele = "AG";
			break;
		case "GC":
			allele = "CG";
			break;
		case "TG":
			allele = "GT";
			break;
	}
	return allele;
}

function generate_child(mommy, daddy)
{
	var child = {};

	for (key in mommy)
	{
		const mommy_allele = mommy[key];
		const daddy_allele = daddy[key];
		
		const child_gene = {};
		for (var i = 0; i < 2; i++)
		{
			for (var j = 0; j < 2; j++)
			{
				var new_allele = mommy_allele[i]+daddy_allele[j];
				new_allele = normalize_allele(new_allele);
				
				if (new_allele in child_gene)
				{
					child_gene[new_allele] = child_gene[new_allele] + 0.25;
				}
				else
				{
					child_gene[new_allele] = 0.25;
				}
				// console.log(new_allele);
				// console.log(child_gene[new_allele]);
			}
		}
		child[key] = child_gene;		
	}
	return child;
}

function likelihood_and_description(child, all_genes)
{
	var appearance = {};

	for (gene in child)
	{
		var description = [];

		for (existing_allele in all_genes[gene]["alleles"])
		{
			var norm_existing_allele = normalize_allele(existing_allele);
			if(norm_existing_allele in child[gene])
			{
				// console.log(existing_allele);
				// console.log(all_genes[gene]["alleles"][existing_allele]);
				description.push(child[gene][norm_existing_allele]+all_genes[gene]["alleles"][existing_allele]); // likelihood + description
			}
		}
		appearance[all_genes[gene]["topic"]] = description;
	}

	return appearance; // {topic:[0.25 + "big man"]}
}
