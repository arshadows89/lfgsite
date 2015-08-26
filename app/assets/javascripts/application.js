// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require fancybox
//= require turbolinks
//= require_tree .

    // $(function() {
    //     $('#guild_charclass').change(function(){
    //         $('.charclass').hide();
    //         $('#' + $(this).val()).show();
    //     });
    // });

$(document).ready(function() {
	$(".various").fancybox({
		padding     : 0,
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	// $('#guild_charclass').change(function(){
 //            $('.charclass').hide();
 //            $('#' + $(this).val()).show();
 //        });
	$('#guild_charclass').change(function(){
		var e = document.getElementById("guild_charclass");
		var strUser = e.options[e.selectedIndex].value;
		if("Death Knight" == strUser) {
			$(".charclass").html("<select name='guild[spec]' id='guild_spec'><option value='Pick a Spec'>Pick a Spec</option><option value='Blood'>Blood</option><option value='Frost'>Frost</option><option value='Unholy'>Unholy</option></select>");
		} else if ("Druid" == strUser) {
			$(".charclass").html("<select name='guild[spec]' id='guild_spec'><option value='Pick a Spec'>Pick a Spec</option><option value='Balance'>Balance</option><option value='Feral'>Feral</option><option value='Guardian'>Guardian</option><option value='Restoration'>Restoration</option></select>");
		} else if("Hunter" == strUser) {
			$(".charclass").html("<select name='guild[spec]' id='guild_spec'><option value='Pick a Spec'>Pick a Spec</option><option value='Beast Mastery'>Beast Mastery</option><option value='Marksmanship'>Marksmanship</option><option value='Survival'>Survival</option></select>");
		} else if("Mage" == strUser) {
			$(".charclass").html("<select name='guild[spec]' id='guild_spec'><option value='Pick a Spec'>Pick a Spec</option><option value='Arcane'>Arcane</option><option value='Fire'>Fire</option><option value='Frost'>Frost</option></select>");
		} else if("Monk" == strUser) {
			$(".charclass").html("<select name='guild[spec]' id='guild_spec'><option value='Pick a Spec'>Pick a Spec</option><option value='Brewmaster'>Brewmaster</option><option value='Mistweaver'>Mistweaver</option><option value='Windwalker'>Windwalker</option></select>");		
		} else if("Paladin" == strUser) {
			$(".charclass").html("<select name='guild[spec]' id='guild_spec'><option value='Pick a Spec'>Pick a Spec</option><option value='Holy'>Holy</option><option value='Protection'>Protection</option><option value='Retribution'>Retribution</option></select>");
		} else if("Priest" == strUser) {
			$(".charclass").html("<select name='guild[spec]' id='guild_spec'><option value='Pick a Spec'>Pick a Spec</option><option value='Discipline'>Discipline</option><option value='Holy'>Holy</option><option value='Shadow'>Shadow</option></select>");
		} else if("Rogue" == strUser) {
			$(".charclass").html("<select name='guild[spec]' id='guild_spec'><option value='Pick a Spec'>Pick a Spec</option><option value='Assassination'>Assassination</option><option value='Combat'>Combat</option><option value='Subtlety'>Subtlety</option></select>");
		} else if("Shaman" == strUser) {
			$(".charclass").html("<select name='guild[spec]' id='guild_spec'><option value='Pick a Spec'>Pick a Spec</option><option value='Elemental'>Elemental</option><option value='Enhancement'>Enhancement</option><option value='Restoration'>Restoration</option></select>");
		} else if("Warlock" == strUser) {
			$(".charclass").html("<select name='guild[spec]' id='guild_spec'><option value='Pick a Spec'>Pick a Spec</option><option value='Affliction'>Affliction</option><option value='Demonology'>Demonology</option><option value='Destruction'>Destruction</option></select>");
		} else if("Warrior" == strUser) {
			$(".charclass").html("<select name='guild[spec]' id='guild_spec'><option value='Pick a Spec'>Pick a Spec</option><option value='Arms'>Arms</option><option value='Fury'>Fury</option><option value='Gladiator'>Gladiator</option><option value='Protection'>Protection</option></select>");
		} else {

        };
    });
});


    // function showGuildForm1(){
    // 	$('#guildportraittext, #guildporbuttondiv').hide()
    // 	$('#Guildform').show()
    // }

    // function showGuildForm2(){
    // 	$('#Guildform').hide()	
    // 	$('#guildportraittext, #guildporbuttondiv').show()
    // }